import type { Question } from "../../types/quiz.types.js";

export const physicsQuestions: Question[] = [
  {
    id: "PHY11-001",
    class: 11,
    subject: "Physics",
    topic: "Physical quantities and measurement",
    subtopic: "Dimensions",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T05",
    question:
      "Which of the following quantities have the dimensions of velocity?",
    options: [
      {
        key: "A",
        text: "Displacement divided by time",
      },
      {
        key: "B",
        text: "Acceleration multiplied by time",
      },
      {
        key: "C",
        text: "Force divided by mass",
      },
      {
        key: "D",
        text: "Work divided by time",
      },
    ],
    correct_options: ["A", "B", "C"],
    is_multi_select: true,
    explanation:
      "Displacement/time, acceleration × time, and force/mass all have dimensions LT⁻¹. Work/time has dimensions of power.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-002",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Equations of motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T07",
    question:
      "A body starts from rest and accelerates uniformly at 2 m/s² for 5 s. What is its final speed?",
    options: [
      {
        key: "A",
        text: "5 m/s",
      },
      {
        key: "B",
        text: "10 m/s",
      },
      {
        key: "C",
        text: "15 m/s",
      },
      {
        key: "D",
        text: "20 m/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Using v = u + at = 0 + 2 × 5 = 10 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-003",
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Vector components",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T10",
    question:
      "A vector of magnitude 10 units makes an angle of 30° with the positive x-axis. What are its x- and y-components?",
    options: [
      {
        key: "A",
        text: "x = 5√3, y = 5",
      },
      {
        key: "B",
        text: "x = 5, y = 5√3",
      },
      {
        key: "C",
        text: "x = 10, y = 0",
      },
      {
        key: "D",
        text: "x = 5√2, y = 5√2",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "Aₓ = A cos 30° = 5√3 and Aᵧ = A sin 30° = 5.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-004",
    class: 11,
    subject: "Physics",
    topic: "Laws of motion",
    subtopic: "Newton's second law",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T03",
    question:
      "A net force of 12 N acts on a 3 kg object. What is the object's acceleration?",
    options: [
      {
        key: "A",
        text: "0.25 m/s²",
      },
      {
        key: "B",
        text: "4 m/s²",
      },
      {
        key: "C",
        text: "9 m/s²",
      },
      {
        key: "D",
        text: "36 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "From F = ma, a = 12/3 = 4 m/s².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-005",
    class: 11,
    subject: "Physics",
    topic: "Work, energy and power",
    subtopic: "Work done",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T01",
    question:
      "A constant force of 10 N moves an object 3 m in the direction of the force. How much work is done?",
    options: [
      {
        key: "A",
        text: "3 J",
      },
      {
        key: "B",
        text: "10 J",
      },
      {
        key: "C",
        text: "30 J",
      },
      {
        key: "D",
        text: "300 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "W = Fs cos 0° = 10 × 3 = 30 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-006",
    class: 11,
    subject: "Physics",
    topic: "Circular motion",
    subtopic: "Centripetal acceleration",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T06",
    question: "Which statements about uniform circular motion are correct?",
    options: [
      {
        key: "A",
        text: "The speed is constant",
      },
      {
        key: "B",
        text: "The velocity is constant",
      },
      {
        key: "C",
        text: "The acceleration points toward the centre",
      },
      {
        key: "D",
        text: "The direction of velocity continually changes",
      },
    ],
    correct_options: ["A", "C", "D"],
    is_multi_select: true,
    explanation:
      "In uniform circular motion, speed is constant but velocity changes direction; centripetal acceleration points inward.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-007",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Universal law of gravitation",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T01",
    question:
      "If the distance between two point masses is doubled, while the masses remain unchanged, the gravitational force becomes:",
    options: [
      {
        key: "A",
        text: "Twice as large",
      },
      {
        key: "B",
        text: "Half as large",
      },
      {
        key: "C",
        text: "One-fourth as large",
      },
      {
        key: "D",
        text: "Four times as large",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Newton's law gives F ∝ 1/r², so doubling r reduces force to one-fourth.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-008",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Hooke's law",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T05",
    question:
      "Within the limit of proportionality, which relationship describes Hooke's law?",
    options: [
      {
        key: "A",
        text: "Stress is proportional to strain",
      },
      {
        key: "B",
        text: "Stress is proportional to strain squared",
      },
      {
        key: "C",
        text: "Strain is independent of stress",
      },
      {
        key: "D",
        text: "Stress is always zero",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For a linearly elastic material within the proportional limit, stress ∝ strain.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-009",
    class: 11,
    subject: "Physics",
    topic: "Heat and thermodynamics",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T11",
    question:
      "How much heat is needed to raise the temperature of 2 kg of a substance with specific heat capacity 500 J kg⁻¹ K⁻¹ by 4 K?",
    options: [
      {
        key: "A",
        text: "250 J",
      },
      {
        key: "B",
        text: "1,000 J",
      },
      {
        key: "C",
        text: "4,000 J",
      },
      {
        key: "D",
        text: "8,000 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Q = mcΔT = 2 × 500 × 4 = 4,000 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-010",
    class: 11,
    subject: "Physics",
    topic: "Waves",
    subtopic: "Wave equation",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T10",
    question:
      "A wave has frequency 50 Hz and wavelength 2 m. What is its speed?",
    options: [
      {
        key: "A",
        text: "25 m/s",
      },
      {
        key: "B",
        text: "52 m/s",
      },
      {
        key: "C",
        text: "100 m/s",
      },
      {
        key: "D",
        text: "200 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Wave speed v = fλ = 50 × 2 = 100 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-001",
    class: 12,
    subject: "Physics",
    topic: "Electric charges and fields",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH19",
    subtopicId: "PHY11-CH19-T09",
    question:
      "Two point charges exert a force F on each other in vacuum. If one charge is doubled and their separation is also doubled, the new force is:",
    options: [
      {
        key: "A",
        text: "F/2",
      },
      {
        key: "B",
        text: "F",
      },
      {
        key: "C",
        text: "2F",
      },
      {
        key: "D",
        text: "4F",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "F ∝ q₁q₂/r². Doubling one charge gives ×2 and doubling distance gives ÷4, so the new force is F/2.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-002",
    class: 12,
    subject: "Physics",
    topic: "Current electricity",
    subtopic: "Ohm's law",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T02",
    question:
      "A 6 Ω resistor is connected across a 12 V ideal battery. What current flows through it?",
    options: [
      {
        key: "A",
        text: "0.5 A",
      },
      {
        key: "B",
        text: "2 A",
      },
      {
        key: "C",
        text: "6 A",
      },
      {
        key: "D",
        text: "72 A",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "I = V/R = 12/6 = 2 A.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-003",
    class: 12,
    subject: "Physics",
    topic: "Magnetic effects of current",
    subtopic: "Magnetic force",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T04",
    question:
      "Which factors affect the magnitude of magnetic force on a moving charge in a uniform magnetic field?",
    options: [
      {
        key: "A",
        text: "Charge magnitude",
      },
      {
        key: "B",
        text: "Speed of the charge",
      },
      {
        key: "C",
        text: "Magnetic field strength",
      },
      {
        key: "D",
        text: "Angle between velocity and magnetic field",
      },
    ],
    correct_options: ["A", "B", "C", "D"],
    is_multi_select: true,
    explanation:
      "F = |q|vB sin θ, so all four factors can affect the magnitude.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-004",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic induction",
    subtopic: "Faraday's law",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T02",
    question:
      "According to Faraday's law, the magnitude of induced emf in a coil depends on the rate of change of:",
    options: [
      {
        key: "A",
        text: "Magnetic flux linkage",
      },
      {
        key: "B",
        text: "Electrical resistance only",
      },
      {
        key: "C",
        text: "Coil mass",
      },
      {
        key: "D",
        text: "Wire density",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The induced emf magnitude is proportional to the rate of change of magnetic flux linkage.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-005",
    class: 12,
    subject: "Physics",
    topic: "Alternating current",
    subtopic: "RMS value",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T03",
    question:
      "For a sinusoidal alternating voltage with peak value 100 V, the RMS voltage is approximately:",
    options: [
      {
        key: "A",
        text: "50 V",
      },
      {
        key: "B",
        text: "70.7 V",
      },
      {
        key: "C",
        text: "100 V",
      },
      {
        key: "D",
        text: "141.4 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Vᵣₘₛ = V₀/√2 ≈ 100/1.414 = 70.7 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-006",
    class: 12,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Refraction",
    topicId: "PHY12-CH10",
    subtopicId: "PHY12-CH10-T07",
    question:
      "Light travels from air into glass. Which statements are correct for a ray incident obliquely on the glass surface?",
    options: [
      {
        key: "A",
        text: "Its speed decreases",
      },
      {
        key: "B",
        text: "Its frequency decreases",
      },
      {
        key: "C",
        text: "Its wavelength decreases",
      },
      {
        key: "D",
        text: "It bends toward the normal if glass has a higher refractive index",
      },
    ],
    correct_options: ["A", "C", "D"],
    is_multi_select: true,
    explanation:
      "Frequency remains constant at a boundary. In glass, light speed and wavelength decrease; the ray bends toward the normal when entering a higher-index medium.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-007",
    class: 12,
    subject: "Physics",
    topic: "Modern physics",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question:
      "In the photoelectric effect, increasing the frequency of incident light above the threshold frequency increases the maximum kinetic energy of emitted electrons. Which relation expresses this?",
    options: [
      {
        key: "A",
        text: "Kmax = hf − ϕ",
      },
      {
        key: "B",
        text: "Kmax = hf + ϕ",
      },
      {
        key: "C",
        text: "Kmax = ϕ − hf",
      },
      {
        key: "D",
        text: "Kmax = h/f",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Einstein's photoelectric equation is Kmax = hf − ϕ, where ϕ is the work function.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-011",
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Vector addition",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T05",
    question:
      "Two forces of magnitudes $6\\text{ N}$ and $8\\text{ N}$ act at right angles to each other. What is the magnitude of their resultant force?",
    options: [
      {
        key: "A",
        text: "$14\\text{ N}$",
      },
      {
        key: "B",
        text: "$10\\text{ N}$",
      },
      {
        key: "C",
        text: "$2\\text{ N}$",
      },
      {
        key: "D",
        text: "$48\\text{ N}$",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "For two orthogonal vectors $\\vec{A}$ and $\\vec{B}$, the resultant magnitude is $R = \\sqrt{A^2 + B^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-012",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Maximum height",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T18",
    question:
      "A projectile is launched from ground level at an angle $\\theta = 30^\\circ$ with an initial velocity $u = 40\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, what is the maximum height attained?",
    options: [
      {
        key: "A",
        text: "$20\\text{ m}$",
      },
      {
        key: "B",
        text: "$40\\text{ m}$",
      },
      {
        key: "C",
        text: "$60\\text{ m}$",
      },
      {
        key: "D",
        text: "$80\\text{ m}$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Maximum height of a projectile is given by $H = \\frac{u^2 \\sin^2\\theta}{2g} = \\frac{40^2 \\times (\\sin 30^\\circ)^2}{2 \\times 10} = \\frac{1600 \\times (0.5)^2}{20} = \\frac{1600 \\times 0.25}{20} = 20\\text{ m}$.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-013",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Kinetic energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T05",
    question:
      "If the linear momentum of an object is doubled while keeping its mass constant, its kinetic energy increases by:",
    options: [
      {
        key: "A",
        text: "$100\\%$",
      },
      {
        key: "B",
        text: "$200\\%$",
      },
      {
        key: "C",
        text: "$300\\%$",
      },
      {
        key: "D",
        text: "$400\\%$",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Kinetic energy $K = \\frac{p^2}{2m}$. If $p$ is doubled ($p' = 2p$), $K' = \\frac{(2p)^2}{2m} = 4K$. Percentage increase is $\\frac{K' - K}{K} \\times 100\\% = \\frac{4K - K}{K} \\times 100\\% = 300\\%$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-014",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Variation of gravitational acceleration",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T06",
    question:
      "At what altitude above the surface of the Earth will the acceleration due to gravity become $\\frac{g}{4}$, where $R$ is the Earth's radius?",
    options: [
      {
        key: "A",
        text: "$h = R/2$",
      },
      {
        key: "B",
        text: "$h = R$",
      },
      {
        key: "C",
        text: "$h = 2R$",
      },
      {
        key: "D",
        text: "$h = 4R$",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At altitude $h$, $g' = g \\left(\\frac{R}{R+h}\\right)^2$. Setting $g' = \\frac{g}{4}$ gives $\\left(\\frac{R}{R+h}\\right)^2 = \\frac{1}{4} \\implies \\frac{R}{R+h} = \\frac{1}{2} \\implies R+h = 2R \\implies h = R$.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-015",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Elastic potential energy",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T12",
    question:
      "A wire of Young's modulus $Y$ and cross-sectional area $A$ is stretched by a force $F$ producing elongation $\\Delta L$. The elastic potential energy stored per unit volume in the wire is:",
    options: [
      {
        key: "A",
        text: "$\\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$",
      },
      {
        key: "B",
        text: "$\\text{Stress} \\times \\text{Strain}$",
      },
      {
        key: "C",
        text: "$\\frac{1}{2} Y \\times (\\text{Stress})^2$",
      },
      {
        key: "D",
        text: "$\\frac{Y}{2 \\times \\text{Strain}}$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The energy density (energy stored per unit volume) in a stretched elastic wire is $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} = \\frac{1}{2} Y (\\text{Strain})^2 = \\frac{\\text{Stress}^2}{2Y}$.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Conceptual Practice; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-016",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Conversion between temperature scales",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T07",
    question:
      "At what temperature do the Celsius and Fahrenheit temperature scales indicate the exact same numerical value?",
    options: [
      {
        key: "A",
        text: "$0^\\circ$",
      },
      {
        key: "B",
        text: "$-40^\\circ$",
      },
      {
        key: "C",
        text: "$100^\\circ$",
      },
      {
        key: "D",
        text: "$-273^\\circ$",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Using $\\frac{C}{5} = \\frac{F - 32}{9}$ and setting $C = F = x$: $\\frac{x}{5} = \\frac{x - 32}{9} \\implies 9x = 5x - 160 \\implies 4x = -160 \\implies x = -40$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-017",
    class: 11,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Adiabatic process",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T09",
    question:
      "During an adiabatic expansion of an ideal gas, the thermodynamic work done by the gas is done entirely at the expense of its:",
    options: [
      {
        key: "A",
        text: "External heat reservoir",
      },
      {
        key: "B",
        text: "Internal energy",
      },
      {
        key: "C",
        text: "Surrounding atmospheric pressure",
      },
      {
        key: "D",
        text: "Entropy gradient",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "By the first law of thermodynamics, $dQ = dU + dW$. In an adiabatic process, $dQ = 0$, so $dW = -dU$. Therefore, work is accomplished strictly by reducing internal energy.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY11-018",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Combination of thin lenses",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T11",
    question:
      "A convex lens of focal length $20\\text{ cm}$ is placed in contact with a concave lens of focal length $30\\text{ cm}$. What is the effective power of the combination?",
    options: [
      {
        key: "A",
        text: "$+1.67\\text{ D}$",
      },
      {
        key: "B",
        text: "$-1.67\\text{ D}$",
      },
      {
        key: "C",
        text: "$+5.0\\text{ D}$",
      },
      {
        key: "D",
        text: "$-5.0\\text{ D}$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Power $P_1 = \\frac{1}{0.20} = +5\\text{ D}$, $P_2 = -\\frac{1}{0.30} = -3.33\\text{ D}$. Total power $P = P_1 + P_2 = 5 - 3.33 = +1.67\\text{ D}$. The combination acts as a convergent lens.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-008",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Rolling motion",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T12",
    question:
      "A solid sphere and a hollow cylinder of equal mass $M$ and radius $R$ roll down an inclined plane without slipping. Which reaches the bottom first?",
    options: [
      {
        key: "A",
        text: "The hollow cylinder",
      },
      {
        key: "B",
        text: "The solid sphere",
      },
      {
        key: "C",
        text: "Both reach simultaneously",
      },
      {
        key: "D",
        text: "Depends on the angle of inclination",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Acceleration along incline is $a = \\frac{g \\sin\\theta}{1 + I/(MR^2)}$. For solid sphere, $I = \\frac{2}{5}MR^2 \\implies k^2/R^2 = 0.4$. For hollow cylinder, $I = MR^2 \\implies k^2/R^2 = 1.0$. Smaller moment of inertia ratio produces higher linear acceleration.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-009",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Force and energy in SHM",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T08",
    question:
      "In Simple Harmonic Motion (SHM), when the displacement of the particle is half of its amplitude ($y = A/2$), the ratio of its kinetic energy to potential energy is:",
    options: [
      {
        key: "A",
        text: "$1:1$",
      },
      {
        key: "B",
        text: "$3:1$",
      },
      {
        key: "C",
        text: "$1:3$",
      },
      {
        key: "D",
        text: "$2:1$",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "$U = \\frac{1}{2}m\\omega^2 y^2 = \\frac{1}{2}m\\omega^2 (A/2)^2 = \\frac{1}{8}m\\omega^2 A^2$. Total energy $E = \\frac{1}{2}m\\omega^2 A^2$. Thus $K = E - U = \\frac{3}{8}m\\omega^2 A^2$. The ratio $K/U = 3/1$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-010",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Potentiometer",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T10",
    question:
      "A potentiometer wire of length $10\\text{ m}$ has a resistance of $20\\text{ }\\Omega$. It is connected in series with a battery of EMF $2.5\\text{ V}$ and internal resistance $5\\text{ }\\Omega$. What is the potential gradient along the wire?",
    options: [
      {
        key: "A",
        text: "$0.2\\text{ V/m}$",
      },
      {
        key: "B",
        text: "$0.02\\text{ V/m}$",
      },
      {
        key: "C",
        text: "$0.1\\text{ V/m}$",
      },
      {
        key: "D",
        text: "$0.05\\text{ V/m}$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Current $I = \\frac{E}{R + r} = \\frac{2.5}{20 + 5} = \\frac{2.5}{25} = 0.1\\text{ A}$. Potential drop across the $10\\text{ m}$ wire is $V = I \\times R = 0.1 \\times 20 = 2.0\\text{ V}$. Potential gradient $k = \\frac{V}{L} = \\frac{2.0\\text{ V}}{10\\text{ m}} = 0.2\\text{ V/m}$.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-011",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Motion of charged particles in magnetic fields",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T06",
    question:
      "A charged particle enters a uniform magnetic field perpendicularly with velocity $v$. The kinetic energy of the charged particle in the magnetic field:",
    options: [
      {
        key: "A",
        text: "Increases linearly with distance",
      },
      {
        key: "B",
        text: "Remains strictly constant",
      },
      {
        key: "C",
        text: "Decreases exponentially",
      },
      {
        key: "D",
        text: "Oscillates sinusoidally",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The magnetic Lorentz force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to the velocity vector $\\vec{v}$. Since $\\vec{F} \\cdot \\vec{v} = 0$, no mechanical work is done by the magnetic field, and the kinetic energy remains invariant.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Conceptual Practice; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-012",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Self-inductance",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T09",
    question:
      "When the current in an inductor of self-inductance $L = 2\\text{ H}$ decreases from $5\\text{ A}$ to $1\\text{ A}$ in $0.1\\text{ s}$, the magnitude of the induced EMF is:",
    options: [
      {
        key: "A",
        text: "$40\\text{ V}$",
      },
      {
        key: "B",
        text: "$80\\text{ V}$",
      },
      {
        key: "C",
        text: "$20\\text{ V}$",
      },
      {
        key: "D",
        text: "$10\\text{ V}$",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "By Faraday-Lenz law of electromagnetic induction, $|e| = L \\left|\\frac{di}{dt}\\right| = 2 \\times \\frac{|1 - 5|}{0.1} = 2 \\times \\frac{4}{0.1} = 80\\text{ V}$.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-013",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Wave-particle duality",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T12",
    question:
      "What is the de Broglie wavelength associated with an electron accelerated through a potential difference of $100\\text{ V}$?",
    options: [
      {
        key: "A",
        text: "$0.123\\text{ nm}$",
      },
      {
        key: "B",
        text: "$1.227\\text{ nm}$",
      },
      {
        key: "C",
        text: "$12.27\\text{ nm}$",
      },
      {
        key: "D",
        text: "$0.012\\text{ nm}$",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For an electron accelerated through potential difference $V$, $\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{1.227}{\\sqrt{100}}\\text{ nm} = \\frac{1.227}{10}\\text{ nm} = 0.1227\\text{ nm} \\approx 0.123\\text{ nm}$.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-014",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Half-life",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T06",
    question:
      "The half-life of a radioactive isotope is $15\\text{ days}$. What fraction of the original sample remains undecayed after $45\\text{ days}$?",
    options: [
      {
        key: "A",
        text: "$1/4$",
      },
      {
        key: "B",
        text: "$1/6$",
      },
      {
        key: "C",
        text: "$1/8$",
      },
      {
        key: "D",
        text: "$1/16$",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Number of half-lives elapsed $n = \\frac{t}{T_{1/2}} = \\frac{45}{15} = 3$. Remaining fraction is $\\frac{N}{N_0} = \\left(\\frac{1}{2}\\right)^n = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "Entrance Standard; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    id: "PHY12-015",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "P-type semiconductors",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T07",
    question:
      "In an intrinsic semiconductor at room temperature, when an acceptor trivalent impurity (such as Boron or Indium) is doped into pure Silicon, it creates:",
    options: [
      {
        key: "A",
        text: "An n-type semiconductor where electrons are majority carriers",
      },
      {
        key: "B",
        text: "A p-type semiconductor where holes are majority carriers",
      },
      {
        key: "C",
        text: "An intrinsic dielectric with zero conductance",
      },
      {
        key: "D",
        text: "A superconductor",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Trivalent atoms have 3 valence electrons. When sharing bonds with tetravalent Silicon, a deficiency of one electron creates a hole. Doping trivalent atoms therefore forms a p-type semiconductor with holes as majority carriers.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Model; Official Nepal NEB CDC Curriculum aligned.",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Physical quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T01",
    question: "Which of the following is a fundamental physical quantity?",
    options: [
      {
        key: "A",
        text: "Length",
      },
      {
        key: "B",
        text: "Force",
      },
      {
        key: "C",
        text: "Energy",
      },
      {
        key: "D",
        text: "Velocity",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Fundamental physical quantities are the basic building blocks of measurement in physics. Length is a fundamental quantity, while force, energy, and velocity are derived from fundamental quantities.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-019",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "SI units",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T03",
    question: "What is the SI unit of mass?",
    options: [
      {
        key: "A",
        text: "Kilogram",
      },
      {
        key: "B",
        text: "Gram",
      },
      {
        key: "C",
        text: "Pound",
      },
      {
        key: "D",
        text: "Ounce",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The SI unit of mass is the kilogram (kg). It is the standard unit used in scientific measurements, while gram, pound, and ounce are not standard SI units.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-020",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensional analysis",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T07",
    question:
      "What are the dimensions of energy in terms of fundamental quantities?",
    options: [
      {
        key: "A",
        text: "[M^1 L^2 T^-2]",
      },
      {
        key: "B",
        text: "[M^1 L^1 T^-1]",
      },
      {
        key: "C",
        text: "[M^2 L^2 T^-1]",
      },
      {
        key: "D",
        text: "[M^1 L^0 T^0]",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Energy is defined as the capacity to do work. Its dimensions are derived from the work equation (W = F × d), which leads to [M^1 L^2 T^-2], where M is mass, L is length, and T is time.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-021",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Measurement errors",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T10",
    question: "Which of the following best describes systematic error?",
    options: [
      {
        key: "A",
        text: "Errors that occur due to unknown fluctuations in measurement.",
      },
      {
        key: "B",
        text: "Errors that consistently occur in the same direction.",
      },
      {
        key: "C",
        text: "Errors that can be reduced by averaging multiple measurements.",
      },
      {
        key: "D",
        text: "Errors due to limitations in measuring equipment.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Systematic errors are consistent and repeatable inaccuracies that occur in the same direction, often due to a flaw in the measurement system or technique. They can skew results in a consistent manner.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-022",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Significant figures",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T09",
    question:
      "When rounding the number 0.00456 to two significant figures, what is the correct result?",
    options: [
      {
        key: "A",
        text: "0.005",
      },
      {
        key: "B",
        text: "0.0046",
      },
      {
        key: "C",
        text: "0.0045",
      },
      {
        key: "D",
        text: "0.00456",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "To round 0.00456 to two significant figures, we look at the first two non-zero digits (4 and 5). The next digit (6) rounds the second digit up to 6, resulting in 0.0046.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-023",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular displacement, velocity and acceleration",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T01",
    question:
      "A wheel rotates with a constant angular acceleration of 2 rad/s². If its initial angular velocity is 5 rad/s, what is its angular velocity after 3 seconds?",
    options: [
      {
        key: "A",
        text: "11 rad/s",
      },
      {
        key: "B",
        text: "8 rad/s",
      },
      {
        key: "C",
        text: "5 rad/s",
      },
      {
        key: "D",
        text: "10 rad/s",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Using the formula for angular velocity under constant acceleration, ω = ω₀ + αt, where ω₀ is the initial angular velocity (5 rad/s), α is angular acceleration (2 rad/s²), and t is time (3 s), we find ω = 5 + (2 × 3) = 11 rad/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-016",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "A force of 10 N is applied perpendicular to a lever arm of length 2 m. What is the torque produced by this force?",
    options: [
      {
        key: "A",
        text: "20 Nm",
      },
      {
        key: "B",
        text: "10 Nm",
      },
      {
        key: "C",
        text: "5 Nm",
      },
      {
        key: "D",
        text: "0 Nm",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Torque (τ) is calculated using the formula τ = r × F, where r is the distance from the pivot (2 m) and F is the force applied (10 N). Thus, τ = 2 m × 10 N = 20 Nm.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-017",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Moment of inertia",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T04",
    question:
      "Which of the following has the greatest moment of inertia about an axis through its center of mass?",
    options: [
      {
        key: "A",
        text: "Solid sphere",
      },
      {
        key: "B",
        text: "Hollow sphere",
      },
      {
        key: "C",
        text: "Solid cylinder",
      },
      {
        key: "D",
        text: "Hollow cylinder",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The moment of inertia depends on the mass distribution. A hollow sphere has a greater moment of inertia compared to a solid sphere or solid cylinder due to its mass being further from the axis of rotation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-018",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Conservation of angular momentum",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T07",
    question:
      "A figure skater spins with arms extended and then pulls her arms in. What happens to her angular velocity as she does this?",
    options: [
      {
        key: "A",
        text: "Increases",
      },
      {
        key: "B",
        text: "Decreases",
      },
      {
        key: "C",
        text: "Remains constant",
      },
      {
        key: "D",
        text: "Becomes zero",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "According to the conservation of angular momentum, when the skater pulls her arms in, her moment of inertia decreases, leading to an increase in angular velocity to conserve angular momentum.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-019",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Rotational kinetic energy",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T08",
    question:
      "What is the formula for rotational kinetic energy of a rotating object?",
    options: [
      {
        key: "A",
        text: "KE = 1/2 I ω²",
      },
      {
        key: "B",
        text: "KE = I ω",
      },
      {
        key: "C",
        text: "KE = mv²",
      },
      {
        key: "D",
        text: "KE = 1/2 m v²",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The formula for rotational kinetic energy (KE) is KE = 1/2 I ω², where I is the moment of inertia and ω is the angular velocity. This is analogous to translational kinetic energy.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-020",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Scalar and vector quantities",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T01",
    question: "Which of the following is an example of a vector quantity?",
    options: [
      {
        key: "A",
        text: "Velocity",
      },
      {
        key: "B",
        text: "Temperature",
      },
      {
        key: "C",
        text: "Mass",
      },
      {
        key: "D",
        text: "Time",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Velocity is a vector quantity because it has both magnitude and direction. In contrast, temperature, mass, and time are scalar quantities as they only possess magnitude.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-024",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Representation of vectors",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T02",
    question: "What is the graphical representation of a vector called?",
    options: [
      {
        key: "A",
        text: "Arrow",
      },
      {
        key: "B",
        text: "Line",
      },
      {
        key: "C",
        text: "Point",
      },
      {
        key: "D",
        text: "Curve",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Vectors are graphically represented by arrows, where the length of the arrow indicates the magnitude and the direction of the arrow indicates the direction of the vector.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-025",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Vector addition",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T05",
    question:
      "If vector A has a magnitude of 5 units and vector B has a magnitude of 3 units, what is the maximum possible magnitude of the resultant vector when they are added?",
    options: [
      {
        key: "A",
        text: "8 units",
      },
      {
        key: "B",
        text: "15 units",
      },
      {
        key: "C",
        text: "2 units",
      },
      {
        key: "D",
        text: "1 unit",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The maximum magnitude of the resultant vector occurs when both vectors are in the same direction, which means you simply add their magnitudes: 5 + 3 = 8 units.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-026",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Resolution of vectors",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T09",
    question:
      "Which of the following statements is true regarding the resolution of vectors?",
    options: [
      {
        key: "A",
        text: "Any vector can be resolved into two perpendicular components.",
      },
      {
        key: "B",
        text: "Vectors can only be resolved into parallel components.",
      },
      {
        key: "C",
        text: "Only scalar quantities can be resolved.",
      },
      {
        key: "D",
        text: "Resolution is only applicable to 2D vectors.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "It is a fundamental principle in physics that any vector can be resolved into two perpendicular components, typically along the x and y axes, allowing for easier analysis of vector interactions.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-027",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Vector product of vectors",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T14",
    question:
      "What is the result of the vector product of two parallel vectors?",
    options: [
      {
        key: "A",
        text: "Zero vector",
      },
      {
        key: "B",
        text: "A scalar quantity",
      },
      {
        key: "C",
        text: "A unit vector",
      },
      {
        key: "D",
        text: "A vector with maximum magnitude",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The vector product (cross product) of two parallel vectors is zero because the sine of the angle between them (which is 0 degrees) equals zero, resulting in a zero vector.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-028",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Periodic motion",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T01",
    question: "Which of the following best defines periodic motion?",
    options: [
      {
        key: "A",
        text: "Motion that repeats at regular intervals.",
      },
      {
        key: "B",
        text: "Motion that occurs in a straight line.",
      },
      {
        key: "C",
        text: "Motion that changes direction continuously.",
      },
      {
        key: "D",
        text: "Motion that occurs without a specific pattern.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Periodic motion is defined as motion that repeats itself at regular intervals, such as the swinging of a pendulum or the oscillation of a spring. This characteristic of repeating cycles is key to identifying periodic motion.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-021",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple harmonic motion",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T03",
    question:
      "In simple harmonic motion (SHM), the acceleration of an object is:",
    options: [
      {
        key: "A",
        text: "Directly proportional to its displacement from the equilibrium position.",
      },
      {
        key: "B",
        text: "Constant regardless of its position.",
      },
      {
        key: "C",
        text: "Inversely proportional to its mass.",
      },
      {
        key: "D",
        text: "Independent of the restoring force.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "In SHM, the acceleration is directly proportional to the negative of the displacement from the equilibrium position, according to Hooke's Law. This means that as the object moves further from equilibrium, the restoring force and hence the acceleration increases.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-022",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Amplitude, frequency and period",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T06",
    question:
      "If the frequency of a simple harmonic oscillator is doubled, what happens to its period?",
    options: [
      {
        key: "A",
        text: "It doubles.",
      },
      {
        key: "B",
        text: "It is halved.",
      },
      {
        key: "C",
        text: "It remains the same.",
      },
      {
        key: "D",
        text: "It becomes four times longer.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The period of a simple harmonic oscillator is the reciprocal of the frequency. If the frequency is doubled, the period is halved, as given by the formula T = 1/f, where T is the period and f is the frequency.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-023",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Energy conservation in SHM",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T11",
    question:
      "In a simple harmonic oscillator, which form of energy is maximum at the maximum displacement?",
    options: [
      {
        key: "A",
        text: "Kinetic energy.",
      },
      {
        key: "B",
        text: "Potential energy.",
      },
      {
        key: "C",
        text: "Mechanical energy.",
      },
      {
        key: "D",
        text: "Thermal energy.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At maximum displacement in simple harmonic motion, the object momentarily comes to rest, thus all of its energy is potential energy. The kinetic energy is zero at this point, while total mechanical energy remains constant.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-024",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Damped oscillations",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T12",
    question:
      "What effect do damping forces have on oscillations in a damped harmonic oscillator?",
    options: [
      {
        key: "A",
        text: "They increase the amplitude over time.",
      },
      {
        key: "B",
        text: "They cause the amplitude to decrease over time.",
      },
      {
        key: "C",
        text: "They have no effect on the frequency of oscillation.",
      },
      {
        key: "D",
        text: "They convert kinetic energy into thermal energy only.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Damping forces, such as friction, act opposite to the direction of motion, causing the amplitude of oscillations to decrease over time. This results in energy loss to the environment, affecting the oscillator's behavior.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-025",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Rest and motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T01",
    question:
      "An object is said to be in motion when it changes its position with respect to a reference point. Which of the following scenarios illustrates this concept?",
    options: [
      {
        key: "A",
        text: "A car parked on the side of the road.",
      },
      {
        key: "B",
        text: "A person walking towards a bus stop.",
      },
      {
        key: "C",
        text: "A tree standing still.",
      },
      {
        key: "D",
        text: "A clock showing the same time.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "An object is in motion if it changes its position over time relative to a fixed point. In this case, the person walking towards the bus stop is changing their position, thus demonstrating motion.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-029",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Speed and velocity",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T04",
    question: "What is the difference between speed and velocity?",
    options: [
      {
        key: "A",
        text: "Speed is a scalar quantity, while velocity is a vector quantity.",
      },
      {
        key: "B",
        text: "Speed can be negative, but velocity cannot.",
      },
      {
        key: "C",
        text: "Speed includes direction, but velocity does not.",
      },
      {
        key: "D",
        text: "Speed is always constant, while velocity varies.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Speed is defined as the distance traveled per unit of time and is a scalar quantity, while velocity includes both speed and direction, making it a vector quantity.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-030",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Equations of motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T07",
    question:
      "An object starts from rest and accelerates uniformly at 2 m/s². What is the velocity of the object after 5 seconds?",
    options: [
      {
        key: "A",
        text: "5 m/s",
      },
      {
        key: "B",
        text: "10 m/s",
      },
      {
        key: "C",
        text: "20 m/s",
      },
      {
        key: "D",
        text: "25 m/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Using the equation of motion v = u + at, where u = 0 m/s (starting from rest), a = 2 m/s², and t = 5 s, we find v = 0 + (2)(5) = 10 m/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-031",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Projectile motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T14",
    question:
      "A ball is thrown horizontally from a height of 20 meters. Ignoring air resistance, how long does it take to hit the ground?",
    options: [
      {
        key: "A",
        text: "1.5 seconds",
      },
      {
        key: "B",
        text: "2.0 seconds",
      },
      {
        key: "C",
        text: "2.5 seconds",
      },
      {
        key: "D",
        text: "4.0 seconds",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Using the formula for free fall, t = √(2h/g), where h = 20 m and g = 9.81 m/s², we find t ≈ √(20/4.905) ≈ 2 seconds.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-032",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Motion graphs",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T08",
    question:
      "In a velocity-time graph, a straight line parallel to the time axis indicates which of the following?",
    options: [
      {
        key: "A",
        text: "Constant acceleration.",
      },
      {
        key: "B",
        text: "Constant velocity.",
      },
      {
        key: "C",
        text: "Increasing velocity.",
      },
      {
        key: "D",
        text: "Decreasing velocity.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A straight line parallel to the time axis in a velocity-time graph indicates that the velocity remains constant over time, thus there is no acceleration.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-033",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Fluids and their properties",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T01",
    question: "Which of the following statements best describes a fluid?",
    options: [
      {
        key: "A",
        text: "A fluid is a substance that can flow and does not have a definite shape.",
      },
      {
        key: "B",
        text: "A fluid is a solid that can change its shape under stress.",
      },
      {
        key: "C",
        text: "Fluids can only be liquids and not gases.",
      },
      {
        key: "D",
        text: "A fluid is any substance that has a fixed volume.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A fluid is defined as a substance that can flow and conforms to the shape of its container. This includes both liquids and gases, making option A the correct statement.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-026",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Density and pressure",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T02",
    question: "What is the SI unit of pressure?",
    options: [
      {
        key: "A",
        text: "Pascal",
      },
      {
        key: "B",
        text: "Newton",
      },
      {
        key: "C",
        text: "Joule",
      },
      {
        key: "D",
        text: "Bar",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Pressure is defined as force per unit area. The SI unit of pressure is the Pascal (Pa), which is equal to one Newton per square meter.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-027",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Pascal's law",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T04",
    question:
      "According to Pascal's law, when pressure is applied to a confined fluid, it is transmitted:",
    options: [
      {
        key: "A",
        text: "Only to the surface of the fluid.",
      },
      {
        key: "B",
        text: "Unequally in different directions.",
      },
      {
        key: "C",
        text: "Equally in all directions.",
      },
      {
        key: "D",
        text: "Only to the bottom of the container.",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Pascal's law states that pressure applied to a confined fluid is transmitted undiminished in all directions throughout the fluid. Therefore, option C is correct.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-028",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Archimedes' principle",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T06",
    question:
      "According to Archimedes' principle, when an object is submerged in a fluid, it experiences an upward buoyant force equal to:",
    options: [
      {
        key: "A",
        text: "The weight of the fluid displaced by the object.",
      },
      {
        key: "B",
        text: "The weight of the object itself.",
      },
      {
        key: "C",
        text: "The density of the fluid.",
      },
      {
        key: "D",
        text: "The volume of the object.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Archimedes' principle states that the buoyant force acting on a submerged object is equal to the weight of the fluid displaced by the object, making option A correct.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-029",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Bernoulli's principle",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T15",
    question:
      "Which of the following statements is a consequence of Bernoulli's principle?",
    options: [
      {
        key: "A",
        text: "As the speed of a fluid increases, its pressure decreases.",
      },
      {
        key: "B",
        text: "Fluids at rest exert pressure equally in all directions.",
      },
      {
        key: "C",
        text: "The total energy of a fluid remains constant.",
      },
      {
        key: "D",
        text: "All of the above are true.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in pressure. Therefore, option A is the correct consequence of Bernoulli's principle.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-030",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Force and inertia",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T01",
    question: "Which of the following best describes inertia?",
    options: [
      {
        key: "A",
        text: "It is the tendency of an object to resist changes in its state of motion.",
      },
      {
        key: "B",
        text: "It is the force required to change an object's motion.",
      },
      {
        key: "C",
        text: "It is the acceleration of an object in motion.",
      },
      {
        key: "D",
        text: "It is the mass of an object multiplied by its velocity.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Inertia is defined as the property of matter that causes it to resist any change in its state of motion, including changes to its speed or direction. According to Newton's first law, an object will remain at rest or in uniform motion unless acted upon by an external force.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-034",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Newton's second law of motion",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T03",
    question:
      "If a force of 10 N is applied to an object of mass 2 kg, what will be its acceleration?",
    options: [
      {
        key: "A",
        text: "5 m/s²",
      },
      {
        key: "B",
        text: "20 m/s²",
      },
      {
        key: "C",
        text: "2 m/s²",
      },
      {
        key: "D",
        text: "10 m/s²",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "According to Newton's second law of motion, acceleration (a) can be calculated using the formula F = ma, where F is the force and m is the mass. Here, a = F/m = 10 N / 2 kg = 5 m/s².",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-035",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Momentum",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T05",
    question:
      "A 3 kg object moving at 4 m/s collides with a stationary 2 kg object. Assuming an elastic collision, what is the velocity of the 2 kg object after the collision?",
    options: [
      {
        key: "A",
        text: "2.4 m/s",
      },
      {
        key: "B",
        text: "3.2 m/s",
      },
      {
        key: "C",
        text: "4 m/s",
      },
      {
        key: "D",
        text: "1.6 m/s",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "In an elastic collision, momentum is conserved. The total momentum before the collision equals the total momentum after the collision. Using the formula for conservation of momentum, we find that the 2 kg object moves at 2.4 m/s after the collision.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-036",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Friction",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T13",
    question:
      "Which of the following factors does NOT affect the force of friction between two surfaces?",
    options: [
      {
        key: "A",
        text: "The nature of the surfaces in contact.",
      },
      {
        key: "B",
        text: "The weight of the object.",
      },
      {
        key: "C",
        text: "The area of contact.",
      },
      {
        key: "D",
        text: "The surface roughness.",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The force of friction is influenced by the nature of the surfaces, the normal force (weight of the object), and surface roughness. However, the area of contact does not significantly affect the force of friction because frictional force is proportional to the normal force and the coefficient of friction.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-037",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Circular motion and centripetal force",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T19",
    question:
      "What is the centripetal force acting on a 5 kg object moving in a circular path of radius 3 m with a speed of 6 m/s?",
    options: [
      {
        key: "A",
        text: "10 N",
      },
      {
        key: "B",
        text: "12 N",
      },
      {
        key: "C",
        text: "15 N",
      },
      {
        key: "D",
        text: "18 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Centripetal force (Fc) can be calculated using the formula Fc = mv²/r. Substituting the values, we get Fc = (5 kg)(6 m/s)² / (3 m) = 12 N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-038",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Thermodynamic systems",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T01",
    question:
      "Which of the following best describes an open thermodynamic system?",
    options: [
      {
        key: "A",
        text: "A system that can exchange both energy and matter with its surroundings.",
      },
      {
        key: "B",
        text: "A system that can exchange only energy but not matter.",
      },
      {
        key: "C",
        text: "A system that can exchange only matter but not energy.",
      },
      {
        key: "D",
        text: "A system that does not exchange either energy or matter.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An open thermodynamic system allows for the transfer of both energy and matter, making it distinct from closed or isolated systems. This definition aligns with standard thermodynamic principles.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-031",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Heat and work",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T04",
    question:
      "What is the relationship expressed by the first law of thermodynamics?",
    options: [
      {
        key: "A",
        text: "ΔU = Q + W",
      },
      {
        key: "B",
        text: "ΔU = Q - W",
      },
      {
        key: "C",
        text: "ΔU = W - Q",
      },
      {
        key: "D",
        text: "ΔU = Q * W",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The first law of thermodynamics states that the change in internal energy (ΔU) of a system is equal to the heat added to the system (Q) plus the work done on the system (W). This formula is fundamental in thermodynamics.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-032",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Thermal equilibrium",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T03",
    question:
      "In the context of thermal equilibrium, which statement is accurate?",
    options: [
      {
        key: "A",
        text: "Heat flows from a cooler body to a hotter body.",
      },
      {
        key: "B",
        text: "Heat flows from a hotter body to a cooler body.",
      },
      {
        key: "C",
        text: "No heat transfer occurs between bodies at different temperatures.",
      },
      {
        key: "D",
        text: "Thermal equilibrium is reached when bodies are at different temperatures.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Thermal equilibrium occurs when two bodies are at the same temperature, leading to no net heat flow. Heat naturally flows from a hotter to a cooler body until equilibrium is established.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-033",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Adiabatic process",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T09",
    question:
      "During an adiabatic process, which of the following statements is true?",
    options: [
      {
        key: "A",
        text: "No heat is exchanged with the surroundings.",
      },
      {
        key: "B",
        text: "The internal energy remains constant.",
      },
      {
        key: "C",
        text: "The pressure of the gas does not change.",
      },
      {
        key: "D",
        text: "Work done on the gas is equal to heat absorbed.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An adiabatic process is characterized by the absence of heat exchange with the surroundings (Q = 0). This leads to changes in internal energy being solely due to work done on or by the system.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-034",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Work done by a gas",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T12",
    question:
      "When a gas expands isothermally, the work done by the gas is given by which of the following expressions?",
    options: [
      {
        key: "A",
        text: "W = nRT ln(Vf/Vi)",
      },
      {
        key: "B",
        text: "W = nRT (Vf - Vi)",
      },
      {
        key: "C",
        text: "W = P(Vf - Vi)",
      },
      {
        key: "D",
        text: "W = 0",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For an isothermal expansion of an ideal gas, the work done by the gas is calculated using the formula W = nRT ln(Vf/Vi), where n is the number of moles, R is the ideal gas constant, and Vf and Vi are the final and initial volumes, respectively.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-035",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Work done by a constant force",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T01",
    question:
      "A constant force of 5 N is applied to move an object 3 meters in the direction of the force. How much work is done by the force?",
    options: [
      {
        key: "A",
        text: "15 J",
      },
      {
        key: "B",
        text: "5 J",
      },
      {
        key: "C",
        text: "10 J",
      },
      {
        key: "D",
        text: "20 J",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Work done is calculated using the formula W = F × d × cos(θ). Here, F = 5 N, d = 3 m, and θ = 0° (force and displacement are in the same direction). Thus, W = 5 N × 3 m × cos(0°) = 15 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-039",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Work done by a variable force",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T02",
    question:
      "If the work done by a variable force on an object varies with distance as W = 2x^2, what is the work done when the object moves from x=1 m to x=3 m?",
    options: [
      {
        key: "A",
        text: "8 J",
      },
      {
        key: "B",
        text: "12 J",
      },
      {
        key: "C",
        text: "16 J",
      },
      {
        key: "D",
        text: "20 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The work done is calculated by integrating the force over distance. W = ∫(2x^2)dx from 1 to 3, which results in [2/3 * x^3] from 1 to 3 = (2/3 * 27) - (2/3 * 1) = 18 - (2/3) = 16 J.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-040",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Kinetic energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T05",
    question:
      "An object of mass 4 kg is moving with a speed of 3 m/s. What is its kinetic energy?",
    options: [
      {
        key: "A",
        text: "18 J",
      },
      {
        key: "B",
        text: "36 J",
      },
      {
        key: "C",
        text: "9 J",
      },
      {
        key: "D",
        text: "12 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Kinetic energy (KE) is given by the formula KE = 1/2 mv^2. Substituting the values, KE = 1/2 * 4 kg * (3 m/s)^2 = 1/2 * 4 * 9 = 18 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-041",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Potential energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T07",
    question:
      "What is the potential energy of a 10 kg mass held at a height of 5 m above the ground? (Assume g = 9.8 m/s²)",
    options: [
      {
        key: "A",
        text: "49 J",
      },
      {
        key: "B",
        text: "98 J",
      },
      {
        key: "C",
        text: "245 J",
      },
      {
        key: "D",
        text: "50 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Potential energy (PE) is calculated using the formula PE = mgh. Here, m = 10 kg, g = 9.8 m/s², and h = 5 m. Thus, PE = 10 * 9.8 * 5 = 490 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-042",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Conservation of mechanical energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T12",
    question:
      "In a closed system, if the potential energy of an object decreases by 100 J, what happens to its kinetic energy assuming mechanical energy is conserved?",
    options: [
      {
        key: "A",
        text: "Increases by 100 J",
      },
      {
        key: "B",
        text: "Decreases by 100 J",
      },
      {
        key: "C",
        text: "Remains the same",
      },
      {
        key: "D",
        text: "Increases by 200 J",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "According to the conservation of mechanical energy, if potential energy decreases, kinetic energy must increase by the same amount to keep the total mechanical energy constant. Therefore, if potential energy decreases by 100 J, kinetic energy increases by 100 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-043",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Second Law of Thermodynamics",
    subtopic: "Limitations of the first law",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T01",
    question:
      "Which of the following statements illustrates a limitation of the first law of thermodynamics?",
    options: [
      {
        key: "A",
        text: "Energy can be created and destroyed.",
      },
      {
        key: "B",
        text: "Heat cannot spontaneously flow from a colder body to a hotter body.",
      },
      {
        key: "C",
        text: "The total energy of an isolated system remains constant.",
      },
      {
        key: "D",
        text: "Work done by a system is equal to the change in internal energy.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed. However, it does not account for the directionality of heat flow, which is governed by the second law. The second law indicates that heat naturally flows from hot to cold, not the reverse without external work.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-036",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Second Law of Thermodynamics",
    subtopic: "Heat engines",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T05",
    question: "What is the primary purpose of a heat engine?",
    options: [
      {
        key: "A",
        text: "To convert thermal energy into mechanical work.",
      },
      {
        key: "B",
        text: "To transfer heat from a cold reservoir to a hot reservoir.",
      },
      {
        key: "C",
        text: "To increase the temperature of a working fluid.",
      },
      {
        key: "D",
        text: "To reduce the entropy of a system.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The fundamental purpose of a heat engine is to convert thermal energy obtained from a heat source into mechanical work. This process involves absorbing heat from a high-temperature reservoir and performing work as it releases some heat to a lower temperature reservoir.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-037",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Second Law of Thermodynamics",
    subtopic: "Carnot theorem",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T11",
    question:
      "According to Carnot's theorem, which of the following statements is true?",
    options: [
      {
        key: "A",
        text: "No real engine can be more efficient than a Carnot engine.",
      },
      {
        key: "B",
        text: "Carnot engines can operate without any heat loss.",
      },
      {
        key: "C",
        text: "The efficiency of all engines is the same regardless of their design.",
      },
      {
        key: "D",
        text: "Carnot engines are only applicable to reversible processes.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Carnot's theorem establishes that no heat engine operating between two heat reservoirs can be more efficient than a Carnot engine operating between the same reservoirs. This sets a fundamental limit on the efficiency of heat engines.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-038",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Second Law of Thermodynamics",
    subtopic: "Entropy",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T12",
    question:
      "What does the concept of entropy in thermodynamics primarily represent?",
    options: [
      {
        key: "A",
        text: "The total energy of a system.",
      },
      {
        key: "B",
        text: "The degree of disorder or randomness in a system.",
      },
      {
        key: "C",
        text: "The heat content of a system.",
      },
      {
        key: "D",
        text: "The work output of a thermodynamic process.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Entropy is a measure of the degree of disorder or randomness in a system. It quantifies the energy in a system that is not available to do work, thus playing a key role in the second law of thermodynamics which states that the total entropy of an isolated system can never decrease over time.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-039",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Second Law of Thermodynamics",
    subtopic: "Coefficient of performance",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T08",
    question:
      "The coefficient of performance (COP) of a refrigerator is defined as the ratio of which two quantities?",
    options: [
      {
        key: "A",
        text: "Heat removed from the cold reservoir to work input.",
      },
      {
        key: "B",
        text: "Work output to heat input.",
      },
      {
        key: "C",
        text: "Heat input to work done.",
      },
      {
        key: "D",
        text: "Work input to heat removed from the hot reservoir.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The coefficient of performance (COP) of a refrigerator is defined as the ratio of the heat removed from the cold reservoir (Q_C) to the work input (W) required to operate the refrigerator. Thus, COP = Q_C / W, indicating the efficiency of the refrigeration cycle.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-040",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Angular displacement",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T01",
    question:
      "An object moves in a circular path of radius 2 m and completes one full revolution. What is the angular displacement in radians?",
    options: [
      {
        key: "A",
        text: "6.28 radians",
      },
      {
        key: "B",
        text: "3.14 radians",
      },
      {
        key: "C",
        text: "2 radians",
      },
      {
        key: "D",
        text: "1.57 radians",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The angular displacement for one full revolution is equal to 2π radians. Since 2π is approximately 6.28, the correct answer is 6.28 radians.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-044",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Angular velocity",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T02",
    question:
      "If an object completes a circular motion with a period of 4 seconds, what is its angular velocity?",
    options: [
      {
        key: "A",
        text: "1.57 rad/s",
      },
      {
        key: "B",
        text: "2π rad/s",
      },
      {
        key: "C",
        text: "0.5 rad/s",
      },
      {
        key: "D",
        text: "0.25 rad/s",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Angular velocity (ω) can be calculated using the formula ω = 2π/T. Substituting T = 4 seconds gives ω = 2π/4 = π/2 ≈ 1.57 rad/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-045",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Centripetal acceleration",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T06",
    question:
      "An object moves in a circle of radius 5 m with a speed of 10 m/s. What is its centripetal acceleration?",
    options: [
      {
        key: "A",
        text: "5 m/s²",
      },
      {
        key: "B",
        text: "10 m/s²",
      },
      {
        key: "C",
        text: "20 m/s²",
      },
      {
        key: "D",
        text: "15 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Centripetal acceleration (a_c) is given by the formula a_c = v²/r. Here, v = 10 m/s and r = 5 m, so a_c = 10²/5 = 100/5 = 20 m/s².",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-046",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Centripetal force",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T07",
    question:
      "If a 2 kg object is moving in a circular path of radius 3 m with a speed of 6 m/s, what is the centripetal force acting on it?",
    options: [
      {
        key: "A",
        text: "4 N",
      },
      {
        key: "B",
        text: "12 N",
      },
      {
        key: "C",
        text: "24 N",
      },
      {
        key: "D",
        text: "36 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Centripetal force (F_c) can be calculated using the formula F_c = mv²/r. Here, m = 2 kg, v = 6 m/s, and r = 3 m, so F_c = 2 * 6² / 3 = 12 N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-047",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Uniform circular motion",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T05",
    question:
      "In uniform circular motion, which of the following quantities remains constant?",
    options: [
      {
        key: "A",
        text: "Tangential speed",
      },
      {
        key: "B",
        text: "Centripetal acceleration",
      },
      {
        key: "C",
        text: "Angular velocity",
      },
      {
        key: "D",
        text: "Centripetal force",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "In uniform circular motion, the angular velocity remains constant as the object covers equal angles in equal intervals of time, while tangential speed and centripetal acceleration can vary depending on the radius.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-048",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Standing waves",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T01",
    question:
      "What condition must be satisfied for standing waves to form in a string fixed at both ends?",
    options: [
      {
        key: "A",
        text: "The length of the string must be an integer multiple of half the wavelength.",
      },
      {
        key: "B",
        text: "The tension in the string must be zero.",
      },
      {
        key: "C",
        text: "The frequency of the wave must be constant.",
      },
      {
        key: "D",
        text: "The amplitude of the wave must be increasing.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For standing waves to form in a string fixed at both ends, the length of the string must be an integer multiple of half the wavelength, ensuring constructive interference at fixed points (nodes). This condition allows the formation of stable standing wave patterns.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-041",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Harmonics in strings",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T06",
    question:
      "Which of the following is the second harmonic frequency of a string with a fundamental frequency of 200 Hz?",
    options: [
      {
        key: "A",
        text: "200 Hz",
      },
      {
        key: "B",
        text: "400 Hz",
      },
      {
        key: "C",
        text: "600 Hz",
      },
      {
        key: "D",
        text: "800 Hz",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The second harmonic frequency is double the fundamental frequency. Therefore, if the fundamental frequency is 200 Hz, the second harmonic frequency is 2 × 200 Hz = 400 Hz.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-042",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Vibrations in open pipes",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T08",
    question:
      "In an open pipe, where are the nodes and antinodes located for the fundamental frequency?",
    options: [
      {
        key: "A",
        text: "Nodes at both ends, antinodes in the middle.",
      },
      {
        key: "B",
        text: "Antinodes at both ends, nodes in the middle.",
      },
      {
        key: "C",
        text: "Nodes at one end and antinodes at the other.",
      },
      {
        key: "D",
        text: "Antinodes at both ends, no nodes.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In an open pipe, the fundamental frequency has antinodes at both ends and a node in the middle. This is due to the requirement for maximum displacement (antinodes) at the open ends where the air can move freely.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-043",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Resonance in air columns",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T13",
    question:
      "What is the effect of resonance in an air column when a tuning fork is struck?",
    options: [
      {
        key: "A",
        text: "Decreased amplitude of sound.",
      },
      {
        key: "B",
        text: "Increased amplitude of sound.",
      },
      {
        key: "C",
        text: "No effect on amplitude.",
      },
      {
        key: "D",
        text: "Permanent increase in frequency.",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "When a tuning fork is struck near an air column that resonates at its frequency, the amplitude of the sound produced increases due to resonance, resulting in louder sound. This occurs because the energy from the fork is effectively transferred to the air column.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-044",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "End correction",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T12",
    question: "What is end correction in the context of vibrating pipes?",
    options: [
      {
        key: "A",
        text: "The additional length of the pipe required to account for the displacement of the air at the open ends.",
      },
      {
        key: "B",
        text: "The loss of energy due to friction in the pipe.",
      },
      {
        key: "C",
        text: "The change in frequency due to temperature variation.",
      },
      {
        key: "D",
        text: "The adjustment of tension in the pipe.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "End correction is the additional length added to the theoretical length of a vibrating pipe to account for the displacement of air at the open ends. It helps to accurately determine the effective wavelength and frequency of the sound produced in the pipe.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-045",
  },
  {
    id: "PHY11-049",
    class: 11,
    subject: "Physics",
    topic: "Physical quantities and measurement",
    subtopic: "Physical quantities and units",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T01",
    question: "What is the SI unit of force?",
    options: [
      {
        key: "A",
        text: "Joule",
      },
      {
        key: "B",
        text: "Newton",
      },
      {
        key: "C",
        text: "Watt",
      },
      {
        key: "D",
        text: "Pascal",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The SI unit of force is the newton (N). One newton is the force required to accelerate a mass of one kilogram at one metre per second squared.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-050",
    class: 11,
    subject: "Physics",
    topic: "Physical quantities and measurement",
    subtopic: "Scalar and vector quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T02",
    question: "Which of the following is a vector quantity?",
    options: [
      {
        key: "A",
        text: "Speed",
      },
      {
        key: "B",
        text: "Distance",
      },
      {
        key: "C",
        text: "Mass",
      },
      {
        key: "D",
        text: "Velocity",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Velocity is a vector quantity because it has both magnitude and direction. Speed, distance, and mass are scalar quantities.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-051",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Kinematics",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T01",
    question:
      "What is the acceleration of an object moving with constant velocity?",
    options: [
      {
        key: "A",
        text: "Zero",
      },
      {
        key: "B",
        text: "Constant but non-zero",
      },
      {
        key: "C",
        text: "Increasing continuously",
      },
      {
        key: "D",
        text: "Decreasing continuously",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Acceleration is the rate of change of velocity. If velocity remains constant in both magnitude and direction, acceleration is zero.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-052",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Equations of motion",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T02",
    question:
      "Which equation relates final velocity, initial velocity, acceleration, and time for constant acceleration?",
    options: [
      {
        key: "A",
        text: "v = u + at",
      },
      {
        key: "B",
        text: "s = vt",
      },
      {
        key: "C",
        text: "F = ma",
      },
      {
        key: "D",
        text: "P = F/A",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For constant acceleration, final velocity v equals initial velocity u plus acceleration a multiplied by time t.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-053",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Newton's laws of motion",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T03",
    question:
      "According to Newton's second law, the net force acting on an object equals:",
    options: [
      {
        key: "A",
        text: "Mass multiplied by velocity",
      },
      {
        key: "B",
        text: "Mass multiplied by acceleration",
      },
      {
        key: "C",
        text: "Weight multiplied by distance",
      },
      {
        key: "D",
        text: "Momentum multiplied by time",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Newton's second law states that the net force on an object equals its mass multiplied by its acceleration.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-054",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Newton's laws of motion",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T03",
    question:
      "A body remains at rest or continues in uniform motion in a straight line unless acted upon by a net external force. This statement represents:",
    options: [
      {
        key: "A",
        text: "Newton's first law",
      },
      {
        key: "B",
        text: "Newton's second law",
      },
      {
        key: "C",
        text: "Newton's third law",
      },
      {
        key: "D",
        text: "The law of gravitation",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Newton's first law is also known as the law of inertia. It describes how an object's motion changes only when a net external force acts on it.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-055",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Work, energy and power",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T04",
    question: "What is the SI unit of work?",
    options: [
      {
        key: "A",
        text: "Newton",
      },
      {
        key: "B",
        text: "Watt",
      },
      {
        key: "C",
        text: "Joule",
      },
      {
        key: "D",
        text: "Pascal",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Work is measured in joules (J). One joule is equal to one newton-metre.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-056",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Work, energy and power",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T04",
    question:
      "Which expression gives the kinetic energy of an object of mass m moving at speed v?",
    options: [
      {
        key: "A",
        text: "mv",
      },
      {
        key: "B",
        text: "mv²",
      },
      {
        key: "C",
        text: "½mv²",
      },
      {
        key: "D",
        text: "mgh",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The kinetic energy of a body moving at speed v is one-half its mass multiplied by the square of its speed.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-057",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Gravitation",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T05",
    question:
      "What is the approximate acceleration due to gravity near Earth's surface?",
    options: [
      {
        key: "A",
        text: "4.9 m/s²",
      },
      {
        key: "B",
        text: "9.8 m/s²",
      },
      {
        key: "C",
        text: "12.8 m/s²",
      },
      {
        key: "D",
        text: "19.6 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The approximate standard value of gravitational acceleration near Earth's surface is 9.8 m/s².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-058",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Gravitation",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T05",
    question:
      "According to Newton's law of universal gravitation, the force between two point masses is inversely proportional to:",
    options: [
      {
        key: "A",
        text: "The distance between them",
      },
      {
        key: "B",
        text: "The square of the distance between them",
      },
      {
        key: "C",
        text: "The product of their masses",
      },
      {
        key: "D",
        text: "The sum of their masses",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The gravitational force follows an inverse-square relationship with separation distance: doubling the distance reduces the force to one-quarter, with masses unchanged.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-059",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Circular motion",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T06",
    question:
      "A body moves in a circle of radius r with speed v. What is its centripetal acceleration?",
    options: [
      {
        key: "A",
        text: "vr",
      },
      {
        key: "B",
        text: "v²/r",
      },
      {
        key: "C",
        text: "v/r",
      },
      {
        key: "D",
        text: "r/v²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Centripetal acceleration has magnitude v²/r and is directed toward the centre of the circular path.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-060",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Elasticity",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T07",
    question:
      "Within the elastic limit, Hooke's law states that stress is directly proportional to:",
    options: [
      {
        key: "A",
        text: "Strain",
      },
      {
        key: "B",
        text: "Density",
      },
      {
        key: "C",
        text: "Temperature",
      },
      {
        key: "D",
        text: "Volume alone",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Within the proportional limit, stress is directly proportional to strain. The ratio of stress to strain is the modulus of elasticity.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-061",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Fluid statics",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T08",
    question:
      "The pressure at a depth h in a stationary liquid of density ρ is given by which expression for gauge pressure?",
    options: [
      {
        key: "A",
        text: "ρgh",
      },
      {
        key: "B",
        text: "ρg/h",
      },
      {
        key: "C",
        text: "gh/ρ",
      },
      {
        key: "D",
        text: "ρh/g",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The gauge pressure in a stationary liquid is P = ρgh, where ρ is density, g is gravitational acceleration, and h is depth.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-062",
    class: 11,
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "Surface tension",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T09",
    question: "Why do small liquid droplets tend to have a spherical shape?",
    options: [
      {
        key: "A",
        text: "Because gravity is always zero",
      },
      {
        key: "B",
        text: "Because surface tension tends to minimize surface area",
      },
      {
        key: "C",
        text: "Because liquids have no intermolecular forces",
      },
      {
        key: "D",
        text: "Because liquid pressure is always zero",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "For a given volume, a sphere has the minimum surface area. Surface tension therefore favours a spherical shape for small droplets when other effects are negligible.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-063",
    class: 11,
    subject: "Physics",
    topic: "Heat and thermodynamics",
    subtopic: "Temperature scales",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T01",
    question:
      "What is the approximate temperature corresponding to 27°C on the Kelvin scale?",
    options: [
      {
        key: "A",
        text: "246 K",
      },
      {
        key: "B",
        text: "273 K",
      },
      {
        key: "C",
        text: "300 K",
      },
      {
        key: "D",
        text: "327 K",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Temperature in kelvin is approximately Celsius temperature plus 273. Thus, 27°C is approximately 300 K.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-064",
    class: 11,
    subject: "Physics",
    topic: "Heat and thermodynamics",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T02",
    question:
      "How much heat is required to raise the temperature of 2 kg of a substance with specific heat capacity 500 J kg⁻¹ K⁻¹ by 4 K?",
    options: [
      {
        key: "A",
        text: "500 J",
      },
      {
        key: "B",
        text: "1000 J",
      },
      {
        key: "C",
        text: "2000 J",
      },
      {
        key: "D",
        text: "4000 J",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation: "Using Q = mcΔT, Q = 2 × 500 × 4 = 4000 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-065",
    class: 11,
    subject: "Physics",
    topic: "Heat and thermodynamics",
    subtopic: "Latent heat",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T03",
    question:
      "What happens to the temperature of a pure substance during melting at constant pressure?",
    options: [
      {
        key: "A",
        text: "It continually increases",
      },
      {
        key: "B",
        text: "It continually decreases",
      },
      {
        key: "C",
        text: "It remains constant until melting is complete",
      },
      {
        key: "D",
        text: "It immediately becomes absolute zero",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "During melting, supplied heat is used as latent heat to change the phase rather than increase the temperature, assuming equilibrium at constant pressure.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-066",
    class: 11,
    subject: "Physics",
    topic: "Heat and thermodynamics",
    subtopic: "Thermodynamic processes",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T04",
    question: "Which process takes place at constant pressure?",
    options: [
      {
        key: "A",
        text: "Isothermal",
      },
      {
        key: "B",
        text: "Adiabatic",
      },
      {
        key: "C",
        text: "Isochoric",
      },
      {
        key: "D",
        text: "Isobaric",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation: "An isobaric process occurs at constant pressure.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-067",
    class: 11,
    subject: "Physics",
    topic: "Waves and sound",
    subtopic: "Wave properties",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T01",
    question:
      "A wave has frequency 50 Hz and wavelength 4 m. What is its speed?",
    options: [
      {
        key: "A",
        text: "12.5 m/s",
      },
      {
        key: "B",
        text: "46 m/s",
      },
      {
        key: "C",
        text: "200 m/s",
      },
      {
        key: "D",
        text: "400 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Wave speed v = fλ = 50 × 4 = 200 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-068",
    class: 11,
    subject: "Physics",
    topic: "Waves and sound",
    subtopic: "Sound waves",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T02",
    question: "Sound cannot travel through:",
    options: [
      {
        key: "A",
        text: "Air",
      },
      {
        key: "B",
        text: "Water",
      },
      {
        key: "C",
        text: "Steel",
      },
      {
        key: "D",
        text: "A vacuum",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Sound is a mechanical wave and requires a material medium to propagate. A vacuum contains no medium to transmit sound.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-069",
    class: 11,
    subject: "Physics",
    topic: "Waves and sound",
    subtopic: "Superposition of waves",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T03",
    question:
      "Constructive interference occurs when two coherent waves meet in phase. What is their phase difference?",
    options: [
      {
        key: "A",
        text: "0 or an integer multiple of 2π",
      },
      {
        key: "B",
        text: "π/2 only",
      },
      {
        key: "C",
        text: "π",
      },
      {
        key: "D",
        text: "An arbitrary phase difference in every case",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Constructive interference occurs when the phase difference is 2nπ, where n is an integer, giving a path difference of nλ.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-070",
    class: 11,
    subject: "Physics",
    topic: "Waves and sound",
    subtopic: "Resonance",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T04",
    question:
      "Resonance occurs when the frequency of an external periodic force equals the:",
    options: [
      {
        key: "A",
        text: "Zero frequency",
      },
      {
        key: "B",
        text: "Natural frequency of the system",
      },
      {
        key: "C",
        text: "Frequency of every other system",
      },
      {
        key: "D",
        text: "Speed of the system",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Resonance occurs when the driving frequency matches the natural frequency, producing a large response when damping is sufficiently small.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-071",
    class: 11,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Reflection of light",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T01",
    question: "According to the law of reflection, the angle of reflection is:",
    options: [
      {
        key: "A",
        text: "Always twice the angle of incidence",
      },
      {
        key: "B",
        text: "Equal to the angle of incidence",
      },
      {
        key: "C",
        text: "Always 90°",
      },
      {
        key: "D",
        text: "Independent of the angle of incidence",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The angle of incidence equals the angle of reflection, with both angles measured from the normal to the reflecting surface.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-072",
    class: 11,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Refraction of light",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T02",
    question:
      "When light passes obliquely from air into glass, it generally bends:",
    options: [
      {
        key: "A",
        text: "Away from the normal",
      },
      {
        key: "B",
        text: "Towards the normal",
      },
      {
        key: "C",
        text: "Along the surface in every case",
      },
      {
        key: "D",
        text: "Backwards along its original path in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Light entering glass from air slows down and, for oblique incidence, refracts towards the normal because glass has a higher refractive index.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-073",
    class: 11,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Total internal reflection",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T03",
    question: "Total internal reflection can occur when light travels:",
    options: [
      {
        key: "A",
        text: "From a rarer to a denser medium at any angle",
      },
      {
        key: "B",
        text: "From a denser to a rarer medium with incidence angle greater than the critical angle",
      },
      {
        key: "C",
        text: "Only through a vacuum",
      },
      {
        key: "D",
        text: "Only at normal incidence",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Total internal reflection requires light to travel from a higher-index medium to a lower-index medium, with incidence angle exceeding the critical angle.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-074",
    class: 11,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Lens power",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T04",
    question:
      "What is the power of a converging lens with focal length +0.5 m?",
    options: [
      {
        key: "A",
        text: "+0.5 D",
      },
      {
        key: "B",
        text: "+1 D",
      },
      {
        key: "C",
        text: "+2 D",
      },
      {
        key: "D",
        text: "−2 D",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Lens power P = 1/f when focal length is in metres. Thus P = 1/0.5 = +2 dioptres.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-075",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Electric charge",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T01",
    question: "What is the approximate magnitude of the elementary charge?",
    options: [
      {
        key: "A",
        text: "1.6 × 10⁻¹⁹ C",
      },
      {
        key: "B",
        text: "1.6 × 10⁻¹⁶ C",
      },
      {
        key: "C",
        text: "9.1 × 10⁻³¹ C",
      },
      {
        key: "D",
        text: "6.63 × 10⁻³⁴ C",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The magnitude of the elementary charge is approximately 1.602 × 10⁻¹⁹ coulombs. A proton carries positive charge and an electron carries the negative of this value.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-076",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T02",
    question:
      "If the separation between two point charges is doubled, what happens to the magnitude of the electrostatic force, assuming the charges remain unchanged?",
    options: [
      {
        key: "A",
        text: "It doubles",
      },
      {
        key: "B",
        text: "It becomes four times larger",
      },
      {
        key: "C",
        text: "It becomes half",
      },
      {
        key: "D",
        text: "It becomes one-quarter",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Coulomb's law gives force proportional to 1/r². Doubling the separation reduces the force to 1/4 of its original value.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-077",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Electric potential",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T03",
    question: "Electric potential difference is defined as:",
    options: [
      {
        key: "A",
        text: "Work done per unit charge",
      },
      {
        key: "B",
        text: "Charge per unit time",
      },
      {
        key: "C",
        text: "Force per unit area",
      },
      {
        key: "D",
        text: "Energy per unit mass",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Potential difference is the work done per unit charge in moving a test charge between two points, with the sign depending on the work convention used.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-078",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Capacitance",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T04",
    question:
      "A capacitor stores a charge of 6 μC at a potential difference of 3 V. What is its capacitance?",
    options: [
      {
        key: "A",
        text: "0.5 μF",
      },
      {
        key: "B",
        text: "2 μF",
      },
      {
        key: "C",
        text: "9 μF",
      },
      {
        key: "D",
        text: "18 μF",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Capacitance C = Q/V = 6 μC / 3 V = 2 μF.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-079",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Electrical power",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T05",
    question:
      "An appliance operates at 220 V and draws a current of 2 A. What is its electrical power?",
    options: [
      {
        key: "A",
        text: "110 W",
      },
      {
        key: "B",
        text: "220 W",
      },
      {
        key: "C",
        text: "440 W",
      },
      {
        key: "D",
        text: "880 W",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Electrical power P = VI = 220 × 2 = 440 W.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-080",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Resistors in parallel",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T06",
    question:
      "Two resistors of 6 Ω each are connected in parallel. What is their equivalent resistance?",
    options: [
      {
        key: "A",
        text: "3 Ω",
      },
      {
        key: "B",
        text: "6 Ω",
      },
      {
        key: "C",
        text: "12 Ω",
      },
      {
        key: "D",
        text: "36 Ω",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For two equal resistors R in parallel, the equivalent resistance is R/2. Thus, 6/2 = 3 Ω.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-081",
    class: 11,
    subject: "Physics",
    topic: "Electricity",
    subtopic: "Electrical energy",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T07",
    question: "One kilowatt-hour is equal to:",
    options: [
      {
        key: "A",
        text: "3600 J",
      },
      {
        key: "B",
        text: "3.6 × 10⁵ J",
      },
      {
        key: "C",
        text: "3.6 × 10⁶ J",
      },
      {
        key: "D",
        text: "3.6 × 10⁹ J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "One kilowatt-hour is 1000 W × 3600 s = 3.6 × 10⁶ joules.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-082",
    class: 11,
    subject: "Physics",
    topic: "Magnetism",
    subtopic: "Magnetic force",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T01",
    question:
      "A charged particle moves parallel to a uniform magnetic field. What is the magnetic force on it?",
    options: [
      {
        key: "A",
        text: "qvB",
      },
      {
        key: "B",
        text: "qvB/2",
      },
      {
        key: "C",
        text: "Zero",
      },
      {
        key: "D",
        text: "Infinite",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The magnetic force magnitude is |q|vB sin θ. For parallel motion, θ = 0°, so the force is zero.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-083",
    class: 11,
    subject: "Physics",
    topic: "Magnetism",
    subtopic: "Magnetic field around a current-carrying wire",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T02",
    question:
      "The magnetic field lines around a long straight current-carrying wire form:",
    options: [
      {
        key: "A",
        text: "Straight lines parallel to the wire",
      },
      {
        key: "B",
        text: "Concentric circles centred on the wire",
      },
      {
        key: "C",
        text: "Radial lines pointing outward",
      },
      {
        key: "D",
        text: "Ellipses with arbitrary centres",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The magnetic field around a long straight current-carrying conductor forms concentric circles, with direction determined by the right-hand grip rule.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-084",
    class: 11,
    subject: "Physics",
    topic: "Magnetism",
    subtopic: "Electromagnetic induction",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T03",
    question:
      "According to Faraday's law, the magnitude of induced EMF depends on the rate of change of:",
    options: [
      {
        key: "A",
        text: "Magnetic flux linkage",
      },
      {
        key: "B",
        text: "Mass of the conductor",
      },
      {
        key: "C",
        text: "Electrical resistance alone",
      },
      {
        key: "D",
        text: "Temperature alone",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Faraday's law states that induced EMF is proportional to the rate of change of magnetic flux linkage through a circuit.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-085",
    class: 11,
    subject: "Physics",
    topic: "Modern physics",
    subtopic: "Photon energy",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T01",
    question:
      "If the frequency of a photon doubles, what happens to its energy?",
    options: [
      {
        key: "A",
        text: "It becomes half",
      },
      {
        key: "B",
        text: "It remains unchanged",
      },
      {
        key: "C",
        text: "It doubles",
      },
      {
        key: "D",
        text: "It becomes four times greater",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Photon energy is E = hf. Since Planck's constant is fixed, doubling frequency doubles photon energy.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-086",
    class: 11,
    subject: "Physics",
    topic: "Modern physics",
    subtopic: "Photoelectric effect",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T02",
    question:
      "For light incident on a suitable metal, increasing the light intensity while keeping its frequency above the threshold generally increases the:",
    options: [
      {
        key: "A",
        text: "Maximum kinetic energy of each emitted electron",
      },
      {
        key: "B",
        text: "Number of emitted photoelectrons per unit time",
      },
      {
        key: "C",
        text: "Work function of the metal",
      },
      {
        key: "D",
        text: "Threshold frequency of the metal",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At fixed frequency above the threshold, greater intensity generally means more incident photons per unit time and therefore more emitted photoelectrons. Maximum kinetic energy depends on frequency.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-087",
    class: 11,
    subject: "Physics",
    topic: "Modern physics",
    subtopic: "De Broglie wavelength",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T03",
    question:
      "The de Broglie wavelength of a particle is inversely proportional to its:",
    options: [
      {
        key: "A",
        text: "Momentum",
      },
      {
        key: "B",
        text: "Electric charge in all cases",
      },
      {
        key: "C",
        text: "Potential energy only",
      },
      {
        key: "D",
        text: "Temperature in every case",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The de Broglie relation is λ = h/p, where h is Planck's constant and p is the particle's momentum.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-088",
    class: 11,
    subject: "Physics",
    topic: "Modern physics",
    subtopic: "Nuclear physics",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T04",
    question: "Which of the following particles has no electric charge?",
    options: [
      {
        key: "A",
        text: "Proton",
      },
      {
        key: "B",
        text: "Electron",
      },
      {
        key: "C",
        text: "Neutron",
      },
      {
        key: "D",
        text: "Positron",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "A neutron has zero net electric charge. Protons and positrons are positively charged, while electrons are negatively charged.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-046",
    class: 12,
    subject: "Physics",
    topic: "Rotational dynamics",
    subtopic: "Moment of inertia",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T01",
    question:
      "The moment of inertia of a rigid body about a specified axis depends on:",
    options: [
      {
        key: "A",
        text: "Only its total mass",
      },
      {
        key: "B",
        text: "Only its angular velocity",
      },
      {
        key: "C",
        text: "The distribution of its mass relative to the axis",
      },
      {
        key: "D",
        text: "Only its temperature",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Moment of inertia is the sum or integral of mass elements multiplied by the square of their perpendicular distance from the rotation axis. It depends on mass distribution and the chosen axis.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-047",
    class: 12,
    subject: "Physics",
    topic: "Rotational dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "The magnitude of torque produced by a force F acting at perpendicular distance r from an axis is:",
    options: [
      {
        key: "A",
        text: "F/r",
      },
      {
        key: "B",
        text: "Fr",
      },
      {
        key: "C",
        text: "F + r",
      },
      {
        key: "D",
        text: "r/F",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Torque magnitude equals force multiplied by the perpendicular moment arm: τ = Fr.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-048",
    class: 12,
    subject: "Physics",
    topic: "Rotational dynamics",
    subtopic: "Angular momentum",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T03",
    question:
      "If the net external torque on a system is zero, which quantity is conserved?",
    options: [
      {
        key: "A",
        text: "Angular momentum",
      },
      {
        key: "B",
        text: "Angular acceleration in every case",
      },
      {
        key: "C",
        text: "Moment of inertia in every case",
      },
      {
        key: "D",
        text: "Rotational kinetic energy in every case",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Zero net external torque means angular momentum remains constant. Rotational kinetic energy need not remain constant if the system's configuration changes.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-049",
    class: 12,
    subject: "Physics",
    topic: "Rotational dynamics",
    subtopic: "Rolling motion",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T04",
    question:
      "For a rigid body rolling without slipping on a stationary surface, the relationship between centre-of-mass speed v and angular speed ω is:",
    options: [
      {
        key: "A",
        text: "v = ω/r",
      },
      {
        key: "B",
        text: "v = ωr",
      },
      {
        key: "C",
        text: "v = ω²r",
      },
      {
        key: "D",
        text: "v = r/ω²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The no-slip condition gives v = ωr, where r is the rolling body's radius.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-050",
    class: 12,
    subject: "Physics",
    topic: "Periodic motion",
    subtopic: "Simple harmonic motion",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T01",
    question:
      "In simple harmonic motion, acceleration is related to displacement x by:",
    options: [
      {
        key: "A",
        text: "a = ω²x",
      },
      {
        key: "B",
        text: "a = −ω²x",
      },
      {
        key: "C",
        text: "a = ωx",
      },
      {
        key: "D",
        text: "a = −ω/x",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Simple harmonic motion has acceleration proportional to displacement and opposite in direction: a = −ω²x.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-051",
    class: 12,
    subject: "Physics",
    topic: "Periodic motion",
    subtopic: "Simple pendulum",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T02",
    question:
      "For small oscillations, what happens to the time period of a simple pendulum if its length is multiplied by four?",
    options: [
      {
        key: "A",
        text: "It becomes half",
      },
      {
        key: "B",
        text: "It remains unchanged",
      },
      {
        key: "C",
        text: "It doubles",
      },
      {
        key: "D",
        text: "It becomes four times greater",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The time period is T = 2π√(L/g). Multiplying L by four multiplies T by √4 = 2.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-052",
    class: 12,
    subject: "Physics",
    topic: "Fluid mechanics",
    subtopic: "Bernoulli's principle",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T01",
    question:
      "For steady flow of an ideal fluid along a streamline, where the fluid speed increases and height remains constant, the static pressure generally:",
    options: [
      {
        key: "A",
        text: "Increases",
      },
      {
        key: "B",
        text: "Decreases",
      },
      {
        key: "C",
        text: "Must become zero",
      },
      {
        key: "D",
        text: "Remains unchanged in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Bernoulli's equation states that pressure plus kinetic energy per unit volume plus gravitational potential energy per unit volume is constant along a streamline for ideal steady flow. At constant height, greater speed corresponds to lower static pressure.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-053",
    class: 12,
    subject: "Physics",
    topic: "Fluid mechanics",
    subtopic: "Equation of continuity",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T02",
    question:
      "For steady incompressible flow through a pipe, the continuity equation is:",
    options: [
      {
        key: "A",
        text: "A₁v₁ = A₂v₂",
      },
      {
        key: "B",
        text: "A₁/v₁ = A₂/v₂",
      },
      {
        key: "C",
        text: "A₁ + v₁ = A₂ + v₂",
      },
      {
        key: "D",
        text: "A₁v₂ = A₂v₁",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For incompressible steady flow, volume flow rate is conserved, so cross-sectional area multiplied by flow speed remains constant.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-054",
    class: 12,
    subject: "Physics",
    topic: "Thermodynamics",
    subtopic: "First law of thermodynamics",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T01",
    question:
      "Using the convention that W is work done by the system, the first law of thermodynamics is:",
    options: [
      {
        key: "A",
        text: "ΔU = Q − W",
      },
      {
        key: "B",
        text: "ΔU = Q + W",
      },
      {
        key: "C",
        text: "ΔU = W − Q",
      },
      {
        key: "D",
        text: "ΔU = QW",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "With Q defined as heat added to the system and W as work done by the system, the first law is ΔU = Q − W.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-055",
    class: 12,
    subject: "Physics",
    topic: "Thermodynamics",
    subtopic: "Heat engines",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T02",
    question: "The thermal efficiency of a heat engine is defined as:",
    options: [
      {
        key: "A",
        text: "Heat rejected divided by work output",
      },
      {
        key: "B",
        text: "Work output divided by heat absorbed",
      },
      {
        key: "C",
        text: "Heat absorbed divided by work output",
      },
      {
        key: "D",
        text: "Work output multiplied by heat absorbed",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Thermal efficiency is useful work output divided by heat absorbed from the hot reservoir: η = W/Qₕ.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-056",
    class: 12,
    subject: "Physics",
    topic: "Electrostatics",
    subtopic: "Electric field",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T01",
    question: "The electric field at a point is defined as the:",
    options: [
      {
        key: "A",
        text: "Force per unit positive test charge",
      },
      {
        key: "B",
        text: "Energy per unit mass",
      },
      {
        key: "C",
        text: "Charge per unit area",
      },
      {
        key: "D",
        text: "Current per unit time",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Electric field E is force per unit positive test charge: E = F/q for a sufficiently small test charge that does not disturb the field.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-057",
    class: 12,
    subject: "Physics",
    topic: "Electrostatics",
    subtopic: "Electric potential energy",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T02",
    question:
      "The electric potential energy of a charge q at electric potential V, taking zero reference consistently, is:",
    options: [
      {
        key: "A",
        text: "q/V",
      },
      {
        key: "B",
        text: "qV",
      },
      {
        key: "C",
        text: "V/q",
      },
      {
        key: "D",
        text: "q + V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Electric potential is potential energy per unit charge, so U = qV.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-058",
    class: 12,
    subject: "Physics",
    topic: "Electrostatics",
    subtopic: "Electric dipole",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T03",
    question: "The electric dipole moment vector points from:",
    options: [
      {
        key: "A",
        text: "Positive charge to negative charge",
      },
      {
        key: "B",
        text: "Negative charge to positive charge",
      },
      {
        key: "C",
        text: "The midpoint in an arbitrary direction",
      },
      {
        key: "D",
        text: "The electric field towards the charge centre in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The electric dipole moment vector is conventionally directed from the negative charge to the positive charge.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-059",
    class: 12,
    subject: "Physics",
    topic: "Current electricity",
    subtopic: "Kirchhoff's current law",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T01",
    question:
      "Kirchhoff's current law at a circuit junction follows from conservation of:",
    options: [
      {
        key: "A",
        text: "Electric charge",
      },
      {
        key: "B",
        text: "Temperature",
      },
      {
        key: "C",
        text: "Magnetic flux in every circuit",
      },
      {
        key: "D",
        text: "Resistance",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Kirchhoff's current law states that the total current entering a junction equals the total current leaving it, expressing conservation of charge.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-060",
    class: 12,
    subject: "Physics",
    topic: "Current electricity",
    subtopic: "Kirchhoff's voltage law",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T02",
    question:
      "Kirchhoff's voltage law states that the algebraic sum of potential differences around a closed circuit loop is:",
    options: [
      {
        key: "A",
        text: "Always positive",
      },
      {
        key: "B",
        text: "Always negative",
      },
      {
        key: "C",
        text: "Zero",
      },
      {
        key: "D",
        text: "Equal to the total resistance",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Kirchhoff's voltage law expresses energy conservation: the algebraic sum of voltage rises and drops around a closed loop is zero.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-061",
    class: 12,
    subject: "Physics",
    topic: "Current electricity",
    subtopic: "Internal resistance",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T03",
    question:
      "When a cell supplies current to an external circuit, its terminal voltage is generally:",
    options: [
      {
        key: "A",
        text: "Greater than its EMF by the internal voltage drop",
      },
      {
        key: "B",
        text: "Less than its EMF because of internal resistance",
      },
      {
        key: "C",
        text: "Always zero",
      },
      {
        key: "D",
        text: "Independent of current and internal resistance",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "For a discharging cell, terminal voltage V = E − Ir, where E is EMF, I is current, and r is internal resistance.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-062",
    class: 12,
    subject: "Physics",
    topic: "Magnetism",
    subtopic: "Force on a current-carrying conductor",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T01",
    question:
      "A straight wire of length L carries current I perpendicular to a uniform magnetic field B. What is the magnetic force magnitude?",
    options: [
      {
        key: "A",
        text: "BIL",
      },
      {
        key: "B",
        text: "BI/L",
      },
      {
        key: "C",
        text: "IL/B",
      },
      {
        key: "D",
        text: "B/(IL)",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The force on a straight current-carrying conductor is F = BIL sin θ. For a perpendicular wire, sin 90° = 1, so F = BIL.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-063",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic induction",
    subtopic: "Lenz's law",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T01",
    question:
      "Lenz's law determines the direction of induced current so that it:",
    options: [
      {
        key: "A",
        text: "Always reinforces the change in magnetic flux",
      },
      {
        key: "B",
        text: "Opposes the change in magnetic flux that produces it",
      },
      {
        key: "C",
        text: "Always flows clockwise",
      },
      {
        key: "D",
        text: "Does not produce a magnetic field",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Lenz's law states that the induced current's magnetic effect opposes the change in flux responsible for the induction, consistent with energy conservation.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-064",
    class: 12,
    subject: "Physics",
    topic: "Alternating current",
    subtopic: "RMS values",
    topicId: "PHY12-CH09",
    subtopicId: "PHY12-CH09-T01",
    question:
      "For a sinusoidal alternating voltage with peak value V₀, the RMS voltage is:",
    options: [
      {
        key: "A",
        text: "V₀",
      },
      {
        key: "B",
        text: "V₀/2",
      },
      {
        key: "C",
        text: "V₀/√2",
      },
      {
        key: "D",
        text: "√2V₀",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For a sinusoidal waveform, the RMS voltage equals the peak voltage divided by √2.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-065",
    class: 12,
    subject: "Physics",
    topic: "Alternating current",
    subtopic: "Transformers",
    topicId: "PHY12-CH09",
    subtopicId: "PHY12-CH09-T02",
    question:
      "An ideal transformer has 100 turns in its primary coil and 500 turns in its secondary coil. If the primary voltage is 20 V, what is the secondary voltage?",
    options: [
      {
        key: "A",
        text: "4 V",
      },
      {
        key: "B",
        text: "20 V",
      },
      {
        key: "C",
        text: "100 V",
      },
      {
        key: "D",
        text: "250 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For an ideal transformer, Vs/Vp = Ns/Np = 500/100 = 5. Therefore Vs = 5 × 20 = 100 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-066",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic waves",
    subtopic: "Electromagnetic spectrum",
    topicId: "PHY12-CH10",
    subtopicId: "PHY12-CH10-T01",
    question:
      "Which of the following electromagnetic waves has the highest frequency?",
    options: [
      {
        key: "A",
        text: "Radio waves",
      },
      {
        key: "B",
        text: "Microwaves",
      },
      {
        key: "C",
        text: "Ultraviolet radiation",
      },
      {
        key: "D",
        text: "Gamma rays",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Gamma rays occupy the highest-frequency, shortest-wavelength region of the electromagnetic spectrum among these choices.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-067",
    class: 12,
    subject: "Physics",
    topic: "Wave optics",
    subtopic: "Young's double-slit experiment",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T01",
    question:
      "In Young's double-slit experiment, fringe width is proportional to:",
    options: [
      {
        key: "A",
        text: "Slit separation",
      },
      {
        key: "B",
        text: "Wavelength of light",
      },
      {
        key: "C",
        text: "The square of slit separation",
      },
      {
        key: "D",
        text: "The inverse of screen distance",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Fringe width β = λD/d, where λ is wavelength, D is the slit-to-screen distance, and d is slit separation. Therefore, fringe width is proportional to wavelength.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-068",
    class: 12,
    subject: "Physics",
    topic: "Wave optics",
    subtopic: "Diffraction",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T02",
    question:
      "Diffraction is most noticeable when the size of an opening is comparable to the:",
    options: [
      {
        key: "A",
        text: "Mass of the wave source",
      },
      {
        key: "B",
        text: "Wavelength of the wave",
      },
      {
        key: "C",
        text: "Amplitude squared",
      },
      {
        key: "D",
        text: "Density of the surrounding medium only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Diffraction becomes pronounced when the size of an aperture or obstacle is comparable to the wavelength of the wave.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-069",
    class: 12,
    subject: "Physics",
    topic: "Wave optics",
    subtopic: "Polarization",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T03",
    question: "Polarization demonstrates that light is:",
    options: [
      {
        key: "A",
        text: "A longitudinal wave",
      },
      {
        key: "B",
        text: "A transverse wave",
      },
      {
        key: "C",
        text: "A mechanical wave requiring air",
      },
      {
        key: "D",
        text: "Unable to transfer energy",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Polarization restricts the direction of transverse oscillations and is evidence that light is a transverse electromagnetic wave.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-070",
    class: 12,
    subject: "Physics",
    topic: "Quantum physics",
    subtopic: "Work function",
    topicId: "PHY12-CH12",
    subtopicId: "PHY12-CH12-T01",
    question: "The work function of a metal is the minimum energy required to:",
    options: [
      {
        key: "A",
        text: "Remove an electron from the metal surface",
      },
      {
        key: "B",
        text: "Create a proton inside the nucleus",
      },
      {
        key: "C",
        text: "Stop all atomic motion",
      },
      {
        key: "D",
        text: "Double the mass of an electron",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The work function is the minimum energy needed to release an electron from a metal surface under the specified conditions.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-071",
    class: 12,
    subject: "Physics",
    topic: "Quantum physics",
    subtopic: "Threshold frequency",
    topicId: "PHY12-CH12",
    subtopicId: "PHY12-CH12-T02",
    question:
      "The threshold frequency of a metal is related to its work function φ by:",
    options: [
      {
        key: "A",
        text: "φ = h/f₀",
      },
      {
        key: "B",
        text: "φ = hf₀",
      },
      {
        key: "C",
        text: "φ = f₀/h",
      },
      {
        key: "D",
        text: "φ = h + f₀",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At the threshold frequency f₀, photon energy just equals the work function: φ = hf₀.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-072",
    class: 12,
    subject: "Physics",
    topic: "Atomic physics",
    subtopic: "Bohr model",
    topicId: "PHY12-CH13",
    subtopicId: "PHY12-CH13-T01",
    question:
      "In the Bohr model of hydrogen, an electron emits a photon when it:",
    options: [
      {
        key: "A",
        text: "Moves from a lower energy level to a higher level",
      },
      {
        key: "B",
        text: "Moves from a higher energy level to a lower level",
      },
      {
        key: "C",
        text: "Remains permanently in the same energy level",
      },
      {
        key: "D",
        text: "Has zero charge",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "An electron emits a photon when it transitions from a higher energy state to a lower one. The photon energy equals the difference between the two levels.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-073",
    class: 12,
    subject: "Physics",
    topic: "Atomic physics",
    subtopic: "Hydrogen spectrum",
    topicId: "PHY12-CH13",
    subtopicId: "PHY12-CH13-T02",
    question:
      "The visible spectral lines of hydrogen belong primarily to which series?",
    options: [
      {
        key: "A",
        text: "Lyman series",
      },
      {
        key: "B",
        text: "Balmer series",
      },
      {
        key: "C",
        text: "Paschen series",
      },
      {
        key: "D",
        text: "Brackett series",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The Balmer series consists of transitions ending at n = 2 in hydrogen and includes prominent visible spectral lines.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-074",
    class: 12,
    subject: "Physics",
    topic: "Nuclear physics",
    subtopic: "Mass-energy equivalence",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T01",
    question: "The mass defect of a nucleus is associated with its:",
    options: [
      {
        key: "A",
        text: "Binding energy",
      },
      {
        key: "B",
        text: "Electrical resistance",
      },
      {
        key: "C",
        text: "Optical magnification",
      },
      {
        key: "D",
        text: "Sound intensity",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The mass defect corresponds to the difference between the sum of the constituent nucleon masses and the actual nuclear mass. Its energy equivalent is the nuclear binding energy.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-075",
    class: 12,
    subject: "Physics",
    topic: "Nuclear physics",
    subtopic: "Nuclear fission",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T02",
    question: "Nuclear fission is the process in which:",
    options: [
      {
        key: "A",
        text: "Two light nuclei combine to form a heavier nucleus",
      },
      {
        key: "B",
        text: "A heavy nucleus splits into lighter nuclei",
      },
      {
        key: "C",
        text: "An electron changes its orbital direction only",
      },
      {
        key: "D",
        text: "A chemical bond forms without nuclear change",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In nuclear fission, a heavy nucleus splits into smaller nuclei, often releasing energy and additional neutrons.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-076",
    class: 12,
    subject: "Physics",
    topic: "Nuclear physics",
    subtopic: "Nuclear fusion",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T03",
    question: "Nuclear fusion is the process in which:",
    options: [
      {
        key: "A",
        text: "Light nuclei combine to form a heavier nucleus",
      },
      {
        key: "B",
        text: "A heavy nucleus always splits spontaneously",
      },
      {
        key: "C",
        text: "Electrons stop moving",
      },
      {
        key: "D",
        text: "Atoms exchange chemical bonds only",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Fusion combines light nuclei into a heavier nucleus and can release energy when the products have greater binding energy per nucleon than the reactants.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-077",
    class: 12,
    subject: "Physics",
    topic: "Nuclear physics",
    subtopic: "Radioactive decay",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T04",
    question:
      "After three half-lives, what fraction of the original radioactive nuclei remains undecayed?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/4",
      },
      {
        key: "C",
        text: "1/6",
      },
      {
        key: "D",
        text: "1/8",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "The remaining fraction after n half-lives is (1/2)ⁿ. After three half-lives, it is (1/2)³ = 1/8.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-078",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor devices",
    subtopic: "Doping",
    topicId: "PHY12-CH15",
    subtopicId: "PHY12-CH15-T01",
    question:
      "Adding a suitable pentavalent impurity to pure silicon generally produces which type of semiconductor?",
    options: [
      {
        key: "A",
        text: "P-type",
      },
      {
        key: "B",
        text: "N-type",
      },
      {
        key: "C",
        text: "An ideal insulator",
      },
      {
        key: "D",
        text: "A superconductor at room temperature",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Pentavalent donor impurities provide additional electrons, producing n-type silicon in which electrons are the majority charge carriers.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-079",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor devices",
    subtopic: "P-type semiconductors",
    topicId: "PHY12-CH15",
    subtopicId: "PHY12-CH15-T02",
    question:
      "In a typical p-type semiconductor, the majority charge carriers are:",
    options: [
      {
        key: "A",
        text: "Electrons",
      },
      {
        key: "B",
        text: "Holes",
      },
      {
        key: "C",
        text: "Neutrons",
      },
      {
        key: "D",
        text: "Protons moving through the lattice",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Trivalent acceptor doping creates holes as the majority carriers in p-type semiconductors, although electrons remain as minority carriers.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-080",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor devices",
    subtopic: "Rectification",
    topicId: "PHY12-CH15",
    subtopicId: "PHY12-CH15-T03",
    question: "The main function of a rectifier circuit is to convert:",
    options: [
      {
        key: "A",
        text: "DC into AC",
      },
      {
        key: "B",
        text: "AC into unidirectional output",
      },
      {
        key: "C",
        text: "Light into sound",
      },
      {
        key: "D",
        text: "Mechanical energy into nuclear energy",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "A rectifier uses components such as diodes to convert alternating current into a unidirectional, usually pulsating DC output.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-081",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor devices",
    subtopic: "Transistors",
    topicId: "PHY12-CH15",
    subtopicId: "PHY12-CH15-T04",
    question:
      "In a transistor operating in the common-emitter configuration, the current gain β is defined as:",
    options: [
      {
        key: "A",
        text: "Collector current divided by base current",
      },
      {
        key: "B",
        text: "Base current divided by collector current",
      },
      {
        key: "C",
        text: "Emitter voltage divided by collector voltage",
      },
      {
        key: "D",
        text: "Collector resistance divided by base resistance",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "The common-emitter current gain is β = I_C/I_B, where I_C is collector current and I_B is base current under the specified operating conditions.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-082",
    class: 12,
    subject: "Physics",
    topic: "Communication systems",
    subtopic: "Modulation",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T01",
    question:
      "In amplitude modulation, which property of the carrier wave varies according to the message signal?",
    options: [
      {
        key: "A",
        text: "Amplitude",
      },
      {
        key: "B",
        text: "Speed in vacuum",
      },
      {
        key: "C",
        text: "Electric charge",
      },
      {
        key: "D",
        text: "Rest mass",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "In amplitude modulation, the carrier amplitude varies with the message signal while the carrier frequency remains nominally fixed.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-083",
    class: 12,
    subject: "Physics",
    topic: "Communication systems",
    subtopic: "Bandwidth",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T02",
    question:
      "For conventional double-sideband amplitude modulation with a single-tone message of frequency fₘ, the required transmission bandwidth is:",
    options: [
      {
        key: "A",
        text: "fₘ/2",
      },
      {
        key: "B",
        text: "fₘ",
      },
      {
        key: "C",
        text: "2fₘ",
      },
      {
        key: "D",
        text: "4fₘ",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Conventional double-sideband AM produces sidebands at the carrier frequency plus and minus the message frequency, giving a total bandwidth of 2fₘ.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-084",
    class: 12,
    subject: "Physics",
    topic: "Special relativity",
    subtopic: "Mass-energy equivalence",
    topicId: "PHY12-CH17",
    subtopicId: "PHY12-CH17-T01",
    question:
      "According to mass-energy equivalence, the rest energy of a body of mass m is:",
    options: [
      {
        key: "A",
        text: "mc",
      },
      {
        key: "B",
        text: "mc²",
      },
      {
        key: "C",
        text: "m/c",
      },
      {
        key: "D",
        text: "m²c",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Einstein's mass-energy relation gives rest energy E₀ = mc², where c is the speed of light in vacuum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-085",
    class: 12,
    subject: "Physics",
    topic: "Special relativity",
    subtopic: "Time dilation",
    topicId: "PHY12-CH17",
    subtopicId: "PHY12-CH17-T02",
    question:
      "According to special relativity, a moving clock measured by an inertial observer who sees it moving runs:",
    options: [
      {
        key: "A",
        text: "Faster than the observer's identical stationary clock in all frames",
      },
      {
        key: "B",
        text: "Slower than the observer's clock, when compared using the standard inertial-frame setup",
      },
      {
        key: "C",
        text: "At infinite speed",
      },
      {
        key: "D",
        text: "At a rate independent of relative speed",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Time dilation means a moving clock is measured to tick more slowly relative to an inertial frame in which it is moving. Comparisons of separated clocks require care about the reference frame and synchronization.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-089",
    class: 11,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Moment of Inertia",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T03",
    question:
      "The moment of inertia of a body depends on which of the following?",
    options: [
      {
        key: "A",
        text: "Mass of the body",
      },
      {
        key: "B",
        text: "Distribution of mass about the axis",
      },
      {
        key: "C",
        text: "Position of the axis of rotation",
      },
      {
        key: "D",
        text: "Angular velocity only",
      },
    ],
    correct_options: ["A", "B", "C"],
    is_multi_select: true,
    explanation:
      "Moment of inertia depends on the mass distribution relative to the chosen axis and therefore changes when the axis changes. It does not depend directly on angular velocity.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-090",
    class: 11,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular Momentum",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T04",
    question:
      "A rotating body has moment of inertia I and angular velocity ω. Its angular momentum about the axis is:",
    options: [
      {
        key: "A",
        text: "Iω",
      },
      {
        key: "B",
        text: "I/ω",
      },
      {
        key: "C",
        text: "Iω²",
      },
      {
        key: "D",
        text: "ω/I",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For rotation about a fixed principal axis, angular momentum is L = Iω.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-091",
    class: 11,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T02",
    question:
      "A force of 10 N acts perpendicular to a lever arm of length 0.5 m. What is the torque about the pivot?",
    options: [
      {
        key: "A",
        text: "2 N m",
      },
      {
        key: "B",
        text: "5 N m",
      },
      {
        key: "C",
        text: "10 N m",
      },
      {
        key: "D",
        text: "20 N m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Torque magnitude is τ = rF sin θ. Since the force is perpendicular, τ = 0.5 × 10 = 5 N m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-092",
    class: 11,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Conservation of Angular Momentum",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T05",
    question:
      "A skater spins faster by pulling their arms inward. Which quantities are conserved if external torque is negligible?",
    options: [
      {
        key: "A",
        text: "Angular momentum",
      },
      {
        key: "B",
        text: "Moment of inertia",
      },
      {
        key: "C",
        text: "Angular velocity",
      },
      {
        key: "D",
        text: "Rotational kinetic energy in every case",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "With negligible external torque, angular momentum remains constant. Pulling the arms inward reduces moment of inertia and increases angular velocity.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-093",
    class: 11,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Rotational Kinetic Energy",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T06",
    question:
      "What is the rotational kinetic energy of a body with moment of inertia 2 kg m² rotating at 3 rad/s?",
    options: [
      {
        key: "A",
        text: "3 J",
      },
      {
        key: "B",
        text: "6 J",
      },
      {
        key: "C",
        text: "9 J",
      },
      {
        key: "D",
        text: "18 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Rotational kinetic energy is K = ½Iω² = ½ × 2 × 3² = 9 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-094",
    class: 11,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple Harmonic Motion",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T01",
    question: "In simple harmonic motion, the acceleration is:",
    options: [
      {
        key: "A",
        text: "Directly proportional to displacement and in the same direction",
      },
      {
        key: "B",
        text: "Proportional to displacement and opposite in direction",
      },
      {
        key: "C",
        text: "Always zero",
      },
      {
        key: "D",
        text: "Independent of displacement",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In SHM, acceleration satisfies a = −ω²x, so it is proportional to displacement but directed toward the equilibrium position.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-095",
    class: 11,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple Pendulum",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T03",
    question:
      "For small oscillations, the time period of a simple pendulum depends on:",
    options: [
      {
        key: "A",
        text: "Mass of the bob",
      },
      {
        key: "B",
        text: "Length of the pendulum and gravitational acceleration",
      },
      {
        key: "C",
        text: "Material of the bob only",
      },
      {
        key: "D",
        text: "Amplitude in all cases",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "For small oscillations, T = 2π√(l/g). The period depends on length and gravitational acceleration, not the bob's mass.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-096",
    class: 11,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Energy in SHM",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T04",
    question: "At which position is the speed of an ideal oscillator maximum?",
    options: [
      {
        key: "A",
        text: "At maximum positive displacement",
      },
      {
        key: "B",
        text: "At maximum negative displacement",
      },
      {
        key: "C",
        text: "At the equilibrium position",
      },
      {
        key: "D",
        text: "At every position equally",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "At equilibrium, displacement and potential energy are minimum, so the oscillator's kinetic energy and speed are maximum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-097",
    class: 11,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Frequency and Period",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T02",
    question:
      "An oscillator completes 20 oscillations in 5 seconds. What is its frequency?",
    options: [
      {
        key: "A",
        text: "0.25 Hz",
      },
      {
        key: "B",
        text: "4 Hz",
      },
      {
        key: "C",
        text: "5 Hz",
      },
      {
        key: "D",
        text: "100 Hz",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Frequency is the number of oscillations per second: f = 20/5 = 4 Hz.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-098",
    class: 11,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Archimedes' Principle",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T02",
    question: "The buoyant force on an object immersed in a fluid equals the:",
    options: [
      {
        key: "A",
        text: "Mass of the object",
      },
      {
        key: "B",
        text: "Weight of the displaced fluid",
      },
      {
        key: "C",
        text: "Volume of the object multiplied by its mass",
      },
      {
        key: "D",
        text: "Atmospheric pressure only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Archimedes' principle states that the buoyant force equals the weight of the fluid displaced by the immersed object.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-099",
    class: 11,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Equation of Continuity",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T04",
    question:
      "For steady incompressible flow through a pipe, which relation is correct?",
    options: [
      {
        key: "A",
        text: "A₁v₁ = A₂v₂",
      },
      {
        key: "B",
        text: "A₁/v₁ = A₂/v₂",
      },
      {
        key: "C",
        text: "A₁v₂ = A₂v₁ only if pressure is constant",
      },
      {
        key: "D",
        text: "A₁ + v₁ = A₂ + v₂",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Conservation of mass gives Av = constant for steady incompressible flow, so A₁v₁ = A₂v₂.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-100",
    class: 11,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Bernoulli's Principle",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T05",
    question:
      "For ideal horizontal fluid flow, if the fluid speed increases, its static pressure generally:",
    options: [
      {
        key: "A",
        text: "Increases",
      },
      {
        key: "B",
        text: "Decreases",
      },
      {
        key: "C",
        text: "Remains unchanged in all cases",
      },
      {
        key: "D",
        text: "Becomes infinite",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Bernoulli's equation for horizontal ideal flow is P + ½ρv² = constant. Higher speed corresponds to lower static pressure along the streamline.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-101",
    class: 11,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Viscosity",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T06",
    question: "The SI unit of dynamic viscosity is:",
    options: [
      {
        key: "A",
        text: "N/m",
      },
      {
        key: "B",
        text: "Pa s",
      },
      {
        key: "C",
        text: "J/s",
      },
      {
        key: "D",
        text: "kg/m²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Dynamic viscosity has the SI unit pascal-second (Pa s), equivalent to kg m⁻¹ s⁻¹.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-102",
    class: 11,
    subject: "Physics",
    topic: "Heat and Thermodynamics",
    subtopic: "First Law of Thermodynamics",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T04",
    question:
      "Using the convention ΔU = Q − W, a system absorbs 500 J of heat and does 200 J of work. What is the change in internal energy?",
    options: [
      {
        key: "A",
        text: "200 J",
      },
      {
        key: "B",
        text: "300 J",
      },
      {
        key: "C",
        text: "500 J",
      },
      {
        key: "D",
        text: "700 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The first law gives ΔU = Q − W = 500 − 200 = 300 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-103",
    class: 11,
    subject: "Physics",
    topic: "Heat and Thermodynamics",
    subtopic: "Isothermal Process",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T05",
    question:
      "For an ideal gas undergoing an isothermal process, which statement is correct?",
    options: [
      {
        key: "A",
        text: "Its temperature remains constant",
      },
      {
        key: "B",
        text: "Its internal energy changes",
      },
      {
        key: "C",
        text: "Its pressure must remain constant",
      },
      {
        key: "D",
        text: "Its volume must remain constant",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An isothermal process occurs at constant temperature. For an ideal gas, internal energy depends only on temperature and therefore remains constant during this process.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-104",
    class: 11,
    subject: "Physics",
    topic: "Heat and Thermodynamics",
    subtopic: "Thermal Expansion",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T01",
    question:
      "A metal rod of length 2 m has a linear expansion coefficient of 1.2 × 10⁻⁵ K⁻¹. What is its increase in length for a 50 K temperature rise?",
    options: [
      {
        key: "A",
        text: "0.12 mm",
      },
      {
        key: "B",
        text: "0.6 mm",
      },
      {
        key: "C",
        text: "1.2 mm",
      },
      {
        key: "D",
        text: "12 mm",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "ΔL = αLΔT = 1.2 × 10⁻⁵ × 2 × 50 = 1.2 × 10⁻³ m = 1.2 mm.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-105",
    class: 11,
    subject: "Physics",
    topic: "Heat and Thermodynamics",
    subtopic: "Second Law of Thermodynamics",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T01",
    question:
      "Which statement best describes the second law of thermodynamics?",
    options: [
      {
        key: "A",
        text: "Heat spontaneously flows from colder to hotter bodies without external work",
      },
      {
        key: "B",
        text: "Heat engines can convert all absorbed heat into work in a complete cycle",
      },
      {
        key: "C",
        text: "Natural processes have a preferred direction associated with entropy",
      },
      {
        key: "D",
        text: "Energy cannot be conserved",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The second law establishes the direction of spontaneous processes and states that the total entropy of an isolated system does not decrease.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-106",
    class: 11,
    subject: "Physics",
    topic: "Waves",
    subtopic: "Wave Speed",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T02",
    question:
      "A wave has frequency 50 Hz and wavelength 0.4 m. What is its speed?",
    options: [
      {
        key: "A",
        text: "5 m/s",
      },
      {
        key: "B",
        text: "10 m/s",
      },
      {
        key: "C",
        text: "20 m/s",
      },
      {
        key: "D",
        text: "125 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Wave speed is v = fλ = 50 × 0.4 = 20 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-107",
    class: 11,
    subject: "Physics",
    topic: "Waves",
    subtopic: "Sound Waves",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T03",
    question: "Sound waves in air are primarily:",
    options: [
      {
        key: "A",
        text: "Transverse electromagnetic waves",
      },
      {
        key: "B",
        text: "Longitudinal mechanical waves",
      },
      {
        key: "C",
        text: "Transverse mechanical waves only",
      },
      {
        key: "D",
        text: "Matter waves",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Sound in air travels through compressions and rarefactions, making it a longitudinal mechanical wave.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-108",
    class: 11,
    subject: "Physics",
    topic: "Waves",
    subtopic: "Interference",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T05",
    question:
      "Constructive interference of two coherent waves occurs when their path difference is:",
    options: [
      {
        key: "A",
        text: "(n + 1/2)λ",
      },
      {
        key: "B",
        text: "nλ",
      },
      {
        key: "C",
        text: "λ/4 for every order",
      },
      {
        key: "D",
        text: "Always zero only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Constructive interference occurs when the waves arrive in phase, corresponding to a path difference nλ, where n is an integer.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-109",
    class: 11,
    subject: "Physics",
    topic: "Waves",
    subtopic: "Beats",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T06",
    question:
      "Two tuning forks have frequencies 256 Hz and 260 Hz. What is the beat frequency when sounded together?",
    options: [
      {
        key: "A",
        text: "2 Hz",
      },
      {
        key: "B",
        text: "4 Hz",
      },
      {
        key: "C",
        text: "256 Hz",
      },
      {
        key: "D",
        text: "516 Hz",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Beat frequency equals the absolute difference between the frequencies: |260 − 256| = 4 Hz.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-110",
    class: 11,
    subject: "Physics",
    topic: "Optics",
    subtopic: "Refraction",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T02",
    question:
      "When light travels from air into glass, which quantities generally change?",
    options: [
      {
        key: "A",
        text: "Frequency",
      },
      {
        key: "B",
        text: "Wavelength",
      },
      {
        key: "C",
        text: "Speed",
      },
      {
        key: "D",
        text: "Both wavelength and speed",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "At a stationary boundary, frequency remains constant. In glass, light travels more slowly and its wavelength decreases.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-086",
    class: 12,
    subject: "Physics",
    topic: "Electric Charges and Fields",
    subtopic: "Coulomb's Law",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "If the distance between two point charges is doubled, the magnitude of the electrostatic force becomes:",
    options: [
      {
        key: "A",
        text: "Twice the original force",
      },
      {
        key: "B",
        text: "Half the original force",
      },
      {
        key: "C",
        text: "One-fourth the original force",
      },
      {
        key: "D",
        text: "Four times the original force",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Coulomb's law gives F ∝ 1/r². Doubling the separation reduces the force to one-fourth of its original value.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-087",
    class: 12,
    subject: "Physics",
    topic: "Electric Charges and Fields",
    subtopic: "Electric Potential",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T04",
    question: "The SI unit of electric potential is:",
    options: [
      {
        key: "A",
        text: "Coulomb",
      },
      {
        key: "B",
        text: "Volt",
      },
      {
        key: "C",
        text: "Farad",
      },
      {
        key: "D",
        text: "Tesla",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Electric potential is energy per unit charge and is measured in joules per coulomb, called volts.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-088",
    class: 12,
    subject: "Physics",
    topic: "Electric Charges and Fields",
    subtopic: "Capacitance",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T06",
    question:
      "A capacitor stores charge 20 μC at a potential difference of 10 V. Its capacitance is:",
    options: [
      {
        key: "A",
        text: "0.5 μF",
      },
      {
        key: "B",
        text: "2 μF",
      },
      {
        key: "C",
        text: "10 μF",
      },
      {
        key: "D",
        text: "200 μF",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Capacitance is C = Q/V = 20 μC/10 V = 2 μF.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-089",
    class: 12,
    subject: "Physics",
    topic: "Electric Charges and Fields",
    subtopic: "Capacitors in Parallel",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T07",
    question:
      "Two capacitors of 3 μF and 6 μF are connected in parallel. Their equivalent capacitance is:",
    options: [
      {
        key: "A",
        text: "2 μF",
      },
      {
        key: "B",
        text: "3 μF",
      },
      {
        key: "C",
        text: "9 μF",
      },
      {
        key: "D",
        text: "18 μF",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For capacitors in parallel, equivalent capacitance is the sum: C = 3 + 6 = 9 μF.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-090",
    class: 12,
    subject: "Physics",
    topic: "Current Electricity",
    subtopic: "Ohm's Law",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T01",
    question:
      "A resistor of 8 Ω carries a current of 1.5 A. What is the potential difference across it?",
    options: [
      {
        key: "A",
        text: "5.3 V",
      },
      {
        key: "B",
        text: "9 V",
      },
      {
        key: "C",
        text: "12 V",
      },
      {
        key: "D",
        text: "16 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Ohm's law gives V = IR = 1.5 × 8 = 12 V. Therefore, the correct option is C.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-091",
    class: 12,
    subject: "Physics",
    topic: "Current Electricity",
    subtopic: "Resistors in Series",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T02",
    question:
      "Three resistors of 2 Ω, 4 Ω, and 6 Ω are connected in series. What is their equivalent resistance?",
    options: [
      {
        key: "A",
        text: "1 Ω",
      },
      {
        key: "B",
        text: "6 Ω",
      },
      {
        key: "C",
        text: "12 Ω",
      },
      {
        key: "D",
        text: "24 Ω",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "In a series connection, resistances add directly: R = 2 + 4 + 6 = 12 Ω.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-092",
    class: 12,
    subject: "Physics",
    topic: "Current Electricity",
    subtopic: "Resistors in Parallel",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T03",
    question:
      "Two resistors of 6 Ω each are connected in parallel. Their equivalent resistance is:",
    options: [
      {
        key: "A",
        text: "3 Ω",
      },
      {
        key: "B",
        text: "6 Ω",
      },
      {
        key: "C",
        text: "12 Ω",
      },
      {
        key: "D",
        text: "36 Ω",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For two equal resistors in parallel, equivalent resistance is half of either resistance: 6/2 = 3 Ω.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-093",
    class: 12,
    subject: "Physics",
    topic: "Current Electricity",
    subtopic: "Electrical Power",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T04",
    question:
      "A device operates at 12 V and draws 2 A of current. Its electrical power is:",
    options: [
      {
        key: "A",
        text: "6 W",
      },
      {
        key: "B",
        text: "14 W",
      },
      {
        key: "C",
        text: "24 W",
      },
      {
        key: "D",
        text: "48 W",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Electrical power is P = VI = 12 × 2 = 24 W.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-094",
    class: 12,
    subject: "Physics",
    topic: "Current Electricity",
    subtopic: "Kirchhoff's Current Law",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T05",
    question:
      "At a junction, 5 A and 2 A enter while 4 A leaves. What current must also leave the junction?",
    options: [
      {
        key: "A",
        text: "1 A",
      },
      {
        key: "B",
        text: "3 A",
      },
      {
        key: "C",
        text: "7 A",
      },
      {
        key: "D",
        text: "11 A",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Kirchhoff's current law requires total incoming current to equal total outgoing current. The outgoing total must be 7 A, so the additional current is 7 − 4 = 3 A.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-095",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Field",
    subtopic: "Force on a Current-Carrying Conductor",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T02",
    question:
      "A straight conductor of length 0.5 m carries 4 A perpendicular to a magnetic field of 0.2 T. What is the magnetic force?",
    options: [
      {
        key: "A",
        text: "0.1 N",
      },
      {
        key: "B",
        text: "0.4 N",
      },
      {
        key: "C",
        text: "0.8 N",
      },
      {
        key: "D",
        text: "4 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The force is F = BIL sin θ = 0.2 × 4 × 0.5 × 1 = 0.4 N.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-096",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Field",
    subtopic: "Motion of Charged Particles",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T03",
    question:
      "A charged particle enters a uniform magnetic field with velocity perpendicular to the field. If magnetic force is the only force, its path is:",
    options: [
      {
        key: "A",
        text: "A straight line",
      },
      {
        key: "B",
        text: "A circle",
      },
      {
        key: "C",
        text: "A parabola",
      },
      {
        key: "D",
        text: "A stationary point",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The magnetic force remains perpendicular to the velocity and provides the centripetal force, producing circular motion.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-097",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Faraday's Law",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T01",
    question:
      "According to Faraday's law, the induced emf in a coil is proportional to the:",
    options: [
      {
        key: "A",
        text: "Total resistance of the circuit only",
      },
      {
        key: "B",
        text: "Rate of change of magnetic flux linkage",
      },
      {
        key: "C",
        text: "Magnetic flux when it is constant",
      },
      {
        key: "D",
        text: "Mass of the coil",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Faraday's law states that induced emf is equal to the negative rate of change of magnetic flux linkage: ε = −N dΦ/dt.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-098",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Transformers",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T04",
    question:
      "An ideal transformer has 100 turns in the primary coil and 500 turns in the secondary coil. If the primary voltage is 20 V, the secondary voltage is:",
    options: [
      {
        key: "A",
        text: "4 V",
      },
      {
        key: "B",
        text: "20 V",
      },
      {
        key: "C",
        text: "100 V",
      },
      {
        key: "D",
        text: "500 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For an ideal transformer, Vs/Vp = Ns/Np = 500/100 = 5. Thus Vs = 5 × 20 = 100 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-099",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "RMS Value",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T01",
    question:
      "For a sinusoidal alternating current with peak value 10 A, the RMS current is approximately:",
    options: [
      {
        key: "A",
        text: "5 A",
      },
      {
        key: "B",
        text: "7.07 A",
      },
      {
        key: "C",
        text: "10 A",
      },
      {
        key: "D",
        text: "14.14 A",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "For sinusoidal current, Irms = I₀/√2 = 10/√2 ≈ 7.07 A.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-100",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Capacitive Reactance",
    topicId: "PHY12-CH05",
    subtopicId: "PHY12-CH05-T02",
    question:
      "The capacitive reactance of an ideal capacitor as the AC frequency increases:",
    options: [
      {
        key: "A",
        text: "Increases",
      },
      {
        key: "B",
        text: "Decreases",
      },
      {
        key: "C",
        text: "Remains constant",
      },
      {
        key: "D",
        text: "Becomes equal to zero at every frequency",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Capacitive reactance is Xc = 1/(2πfC), so it decreases as frequency increases when capacitance is fixed.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-101",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Waves",
    subtopic: "Properties of Electromagnetic Waves",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T01",
    question:
      "Which statement about electromagnetic waves in vacuum is correct?",
    options: [
      {
        key: "A",
        text: "They require a material medium",
      },
      {
        key: "B",
        text: "Their electric and magnetic fields are parallel",
      },
      {
        key: "C",
        text: "They travel at the speed of light",
      },
      {
        key: "D",
        text: "They cannot carry energy",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Electromagnetic waves propagate through vacuum at approximately 3 × 10⁸ m/s and carry energy without requiring a material medium.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-102",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Waves",
    subtopic: "Electromagnetic Spectrum",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T02",
    question: "Which electromagnetic radiation has the highest frequency?",
    options: [
      {
        key: "A",
        text: "Radio waves",
      },
      {
        key: "B",
        text: "Microwaves",
      },
      {
        key: "C",
        text: "Visible light",
      },
      {
        key: "D",
        text: "Gamma rays",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Gamma rays occupy the highest-frequency, shortest-wavelength region of the conventional electromagnetic spectrum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-103",
    class: 12,
    subject: "Physics",
    topic: "Dual Nature of Radiation",
    subtopic: "Photoelectric Effect",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T01",
    question:
      "In the photoelectric effect, increasing the frequency of incident light above the threshold frequency increases the maximum kinetic energy of emitted electrons. This supports the idea that light energy is:",
    options: [
      {
        key: "A",
        text: "Continuous and independent of frequency",
      },
      {
        key: "B",
        text: "Quantized in photons with energy hf",
      },
      {
        key: "C",
        text: "Always converted entirely into heat",
      },
      {
        key: "D",
        text: "Independent of Planck's constant",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Einstein's photoelectric equation is Kmax = hf − φ. A higher frequency means greater photon energy and therefore greater maximum electron kinetic energy.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-104",
    class: 12,
    subject: "Physics",
    topic: "Dual Nature of Radiation",
    subtopic: "de Broglie Wavelength",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T03",
    question: "The de Broglie wavelength of a particle with momentum p is:",
    options: [
      {
        key: "A",
        text: "λ = hp",
      },
      {
        key: "B",
        text: "λ = h/p",
      },
      {
        key: "C",
        text: "λ = p/h",
      },
      {
        key: "D",
        text: "λ = h/p²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The de Broglie relation assigns wavelength λ = h/p to a particle with momentum p, where h is Planck's constant.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-105",
    class: 12,
    subject: "Physics",
    topic: "Atomic Physics",
    subtopic: "Bohr Model",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T01",
    question:
      "According to the Bohr model of hydrogen, an electron emits a photon when it:",
    options: [
      {
        key: "A",
        text: "Moves from a lower energy level to a higher level",
      },
      {
        key: "B",
        text: "Moves from a higher energy level to a lower level",
      },
      {
        key: "C",
        text: "Remains in the same stationary state",
      },
      {
        key: "D",
        text: "Has zero kinetic energy in every orbit",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "When an electron transitions from a higher to a lower energy level, the energy difference is released as a photon: hf = Ei − Ef.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-106",
    class: 12,
    subject: "Physics",
    topic: "Nuclear Physics",
    subtopic: "Radioactive Half-Life",
    topicId: "PHY12-CH09",
    subtopicId: "PHY12-CH09-T02",
    question:
      "A radioactive sample has a half-life of 6 hours. What fraction remains after 18 hours?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/3",
      },
      {
        key: "C",
        text: "1/6",
      },
      {
        key: "D",
        text: "1/8",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Eighteen hours represents three half-lives. The remaining fraction is (1/2)³ = 1/8.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-107",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Diodes",
    topicId: "PHY12-CH10",
    subtopicId: "PHY12-CH10-T01",
    question:
      "A conventional silicon p-n junction diode conducts strongly when it is:",
    options: [
      {
        key: "A",
        text: "Reverse-biased below breakdown",
      },
      {
        key: "B",
        text: "Forward-biased sufficiently to overcome its junction barrier",
      },
      {
        key: "C",
        text: "Unconnected to a circuit",
      },
      {
        key: "D",
        text: "Kept at zero temperature in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Forward bias reduces the junction barrier and allows substantial current. Reverse bias normally permits only a small leakage current until breakdown.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-108",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular momentum",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T06",
    question:
      "A body has a moment of inertia of 4 kg m² and angular velocity of 3 rad/s. What is its angular momentum?",
    options: [
      {
        key: "A",
        text: "7 kg m²/s",
      },
      {
        key: "B",
        text: "12 kg m²/s",
      },
      {
        key: "C",
        text: "16 kg m²/s",
      },
      {
        key: "D",
        text: "24 kg m²/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Angular momentum L = Iω = 4 × 3 = 12 kg m²/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-109",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "A force of 10 N acts perpendicular to a lever arm of length 0.5 m. What torque does it produce?",
    options: [
      {
        key: "A",
        text: "2 N m",
      },
      {
        key: "B",
        text: "5 N m",
      },
      {
        key: "C",
        text: "10 N m",
      },
      {
        key: "D",
        text: "20 N m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Torque τ = rF sin θ. Since θ = 90°, τ = 0.5 × 10 = 5 N m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-110",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple harmonic motion",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T03",
    question:
      "A mass of 1 kg is attached to a spring of force constant 100 N/m. What is the approximate time period?",
    options: [
      {
        key: "A",
        text: "0.31 s",
      },
      {
        key: "B",
        text: "0.63 s",
      },
      {
        key: "C",
        text: "1.00 s",
      },
      {
        key: "D",
        text: "6.28 s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "T = 2π√(m/k) = 2π√(1/100) ≈ 0.63 s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-111",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple harmonic motion",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T03",
    question:
      "An oscillator has amplitude 0.2 m and angular frequency 5 rad/s. What is its maximum acceleration?",
    options: [
      {
        key: "A",
        text: "1 m/s²",
      },
      {
        key: "B",
        text: "2.5 m/s²",
      },
      {
        key: "C",
        text: "5 m/s²",
      },
      {
        key: "D",
        text: "10 m/s²",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Maximum acceleration amax = ω²A = 5² × 0.2 = 5 m/s².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-112",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Applications of fluid mechanics",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T16",
    question:
      "What pressure is produced by a force of 200 N acting uniformly on an area of 0.5 m²?",
    options: [
      {
        key: "A",
        text: "100 Pa",
      },
      {
        key: "B",
        text: "200 Pa",
      },
      {
        key: "C",
        text: "400 Pa",
      },
      {
        key: "D",
        text: "800 Pa",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Pressure P = F/A = 200/0.5 = 400 Pa.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-113",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Buoyant force",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T07",
    question:
      "An object displaces 0.002 m³ of water. Taking water density as 1000 kg/m³ and g = 10 m/s², what is the buoyant force?",
    options: [
      {
        key: "A",
        text: "2 N",
      },
      {
        key: "B",
        text: "10 N",
      },
      {
        key: "C",
        text: "20 N",
      },
      {
        key: "D",
        text: "200 N",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Buoyant force = ρgV = 1000 × 10 × 0.002 = 20 N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-114",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Equation of continuity",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T14",
    question:
      "Water flows through a pipe whose cross-sectional area decreases from 4 cm² to 2 cm². If the initial speed is 3 m/s, what is the final speed?",
    options: [
      {
        key: "A",
        text: "1.5 m/s",
      },
      {
        key: "B",
        text: "3 m/s",
      },
      {
        key: "C",
        text: "6 m/s",
      },
      {
        key: "D",
        text: "12 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For incompressible flow, A₁v₁ = A₂v₂. Thus v₂ = (4/2) × 3 = 6 m/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-115",
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "First law of thermodynamics",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T06",
    question:
      "A gas absorbs 500 J of heat and does 200 J of work. What is the change in its internal energy?",
    options: [
      {
        key: "A",
        text: "200 J",
      },
      {
        key: "B",
        text: "300 J",
      },
      {
        key: "C",
        text: "500 J",
      },
      {
        key: "D",
        text: "700 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Using ΔU = Q − W, ΔU = 500 − 200 = 300 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-116",
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Isothermal process",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T08",
    question:
      "For an ideal gas undergoing an isothermal process, which quantity remains constant?",
    options: [
      {
        key: "A",
        text: "Pressure only",
      },
      {
        key: "B",
        text: "Volume only",
      },
      {
        key: "C",
        text: "Temperature",
      },
      {
        key: "D",
        text: "Internal energy and pressure separately in all cases",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "An isothermal process occurs at constant temperature. For an ideal gas, internal energy also remains constant because it depends only on temperature.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-117",
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Standing waves",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T01",
    question:
      "The distance between two consecutive nodes in a standing wave is:",
    options: [
      {
        key: "A",
        text: "λ/4",
      },
      {
        key: "B",
        text: "λ/2",
      },
      {
        key: "C",
        text: "λ",
      },
      {
        key: "D",
        text: "2λ",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Consecutive nodes in a standing wave are separated by half a wavelength.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-111",
    class: 11,
    subject: "Physics",
    topic: "Refraction at Plane Surfaces",
    subtopic: "Refraction of light",
    topicId: "PHY11-CH15",
    subtopicId: "PHY11-CH15-T01",
    question:
      "Light travels from air into glass. If the angle of incidence is 30° and the refractive index of glass is 1.5, what is the approximate angle of refraction?",
    options: [
      {
        key: "A",
        text: "19.5°",
      },
      {
        key: "B",
        text: "30°",
      },
      {
        key: "C",
        text: "41.8°",
      },
      {
        key: "D",
        text: "48.6°",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "Snell's law gives sin r = sin 30°/1.5 = 1/3, so r ≈ 19.5°.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-112",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Power of a lens",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T10",
    question:
      "What is the power of a converging lens with focal length 0.25 m?",
    options: [
      {
        key: "A",
        text: "+0.25 D",
      },
      {
        key: "B",
        text: "+2 D",
      },
      {
        key: "C",
        text: "+4 D",
      },
      {
        key: "D",
        text: "−4 D",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Power P = 1/f when f is in metres. P = 1/0.25 = +4 dioptres.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-113",
    class: 11,
    subject: "Physics",
    topic: "Electric Charges",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH19",
    subtopicId: "PHY11-CH19-T09",
    question:
      "Two point charges are separated by a distance r. If the distance is doubled, the electrostatic force becomes:",
    options: [
      {
        key: "A",
        text: "Twice the original force",
      },
      {
        key: "B",
        text: "Half the original force",
      },
      {
        key: "C",
        text: "One-fourth the original force",
      },
      {
        key: "D",
        text: "Four times the original force",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Coulomb's law gives F ∝ 1/r². Doubling r reduces the force to one-fourth.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-114",
    class: 11,
    subject: "Physics",
    topic: "Potential, Potential Difference and Potential Energy",
    subtopic: "Electric potential",
    topicId: "PHY11-CH21",
    subtopicId: "PHY11-CH21-T01",
    question:
      "How much work is required to move a charge of 2 C through a potential difference of 12 V?",
    options: [
      {
        key: "A",
        text: "6 J",
      },
      {
        key: "B",
        text: "12 J",
      },
      {
        key: "C",
        text: "24 J",
      },
      {
        key: "D",
        text: "48 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Work W = qV = 2 × 12 = 24 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-115",
    class: 11,
    subject: "Physics",
    topic: "DC Circuits",
    subtopic: "Resistors in parallel",
    topicId: "PHY11-CH23",
    subtopicId: "PHY11-CH23-T09",
    question:
      "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
    options: [
      {
        key: "A",
        text: "1 Ω",
      },
      {
        key: "B",
        text: "2 Ω",
      },
      {
        key: "C",
        text: "4.5 Ω",
      },
      {
        key: "D",
        text: "9 Ω",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-118",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Faraday's laws of electromagnetic induction",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T02",
    question:
      "The magnetic flux linked with a single-turn coil changes by 0.4 Wb in 0.2 s. What is the magnitude of the average induced emf?",
    options: [
      {
        key: "A",
        text: "0.08 V",
      },
      {
        key: "B",
        text: "0.5 V",
      },
      {
        key: "C",
        text: "2 V",
      },
      {
        key: "D",
        text: "5 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "The magnitude of average emf is |ΔΦ/Δt| = 0.4/0.2 = 2 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-119",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Energy of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T03",
    question: "Which expression gives the energy of a photon of frequency f?",
    options: [
      {
        key: "A",
        text: "E = hf",
      },
      {
        key: "B",
        text: "E = h/f",
      },
      {
        key: "C",
        text: "E = f/h",
      },
      {
        key: "D",
        text: "E = mc",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Planck's relation states that photon energy E = hf, where h is Planck's constant.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-120",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Half-life",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T06",
    question:
      "A radioactive sample has a half-life of 5 days. What fraction of the original sample remains after 15 days?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/4",
      },
      {
        key: "C",
        text: "1/6",
      },
      {
        key: "D",
        text: "1/8",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Fifteen days corresponds to three half-lives, leaving (1/2)³ = 1/8 of the original sample.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-116",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Gravitational potential energy",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T08",
    question:
      "Near Earth's surface, what is the increase in gravitational potential energy of a 2 kg object raised by 5 m? Take g = 10 m/s².",
    options: [
      {
        key: "A",
        text: "10 J",
      },
      {
        key: "B",
        text: "25 J",
      },
      {
        key: "C",
        text: "50 J",
      },
      {
        key: "D",
        text: "100 J",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation: "ΔU = mgh = 2 × 10 × 5 = 100 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-117",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Young's modulus",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T08",
    question:
      "A wire experiences a stress of 2 × 10⁷ Pa and a strain of 10⁻³. What is its Young's modulus?",
    options: [
      {
        key: "A",
        text: "2 × 10⁴ Pa",
      },
      {
        key: "B",
        text: "2 × 10⁷ Pa",
      },
      {
        key: "C",
        text: "2 × 10¹⁰ Pa",
      },
      {
        key: "D",
        text: "2 × 10¹³ Pa",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Young's modulus Y = stress/strain = (2 × 10⁷)/(10⁻³) = 2 × 10¹⁰ Pa.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-118",
    class: 11,
    subject: "Physics",
    topic: "Ideal Gas",
    subtopic: "Root mean square speed",
    topicId: "PHY11-CH13",
    subtopicId: "PHY11-CH13-T13",
    question:
      "For an ideal gas at fixed molar mass, if the absolute temperature becomes four times its initial value, its root mean square speed becomes:",
    options: [
      {
        key: "A",
        text: "Half",
      },
      {
        key: "B",
        text: "Twice",
      },
      {
        key: "C",
        text: "Four times",
      },
      {
        key: "D",
        text: "Eight times",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The rms speed is proportional to √T. If T increases by a factor of four, speed increases by √4 = 2.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-121",
    class: 12,
    subject: "Physics",
    topic: "Mechanical Waves",
    subtopic: "Beats",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T12",
    question:
      "Two sound waves of frequencies 256 Hz and 260 Hz are sounded together. What is the beat frequency?",
    options: [
      {
        key: "A",
        text: "2 Hz",
      },
      {
        key: "B",
        text: "4 Hz",
      },
      {
        key: "C",
        text: "258 Hz",
      },
      {
        key: "D",
        text: "516 Hz",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Beat frequency = |f₁ − f₂| = |260 − 256| = 4 Hz.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-119",
    class: 11,
    subject: "Physics",
    topic: "Electric Field",
    subtopic: "Electric field",
    topicId: "PHY11-CH20",
    subtopicId: "PHY11-CH20-T01",
    question:
      "A charge of 3 μC experiences a force of 0.06 N in an electric field. What is the electric field strength?",
    options: [
      {
        key: "A",
        text: "2 × 10³ N/C",
      },
      {
        key: "B",
        text: "2 × 10⁴ N/C",
      },
      {
        key: "C",
        text: "5 × 10⁴ N/C",
      },
      {
        key: "D",
        text: "2 × 10⁵ N/C",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "E = F/q = 0.06/(3 × 10⁻⁶) = 2 × 10⁴ N/C.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-120",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Energy stored in a capacitor",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T09",
    question:
      "A 4 μF capacitor is charged to 100 V. How much energy does it store?",
    options: [
      {
        key: "A",
        text: "0.002 J",
      },
      {
        key: "B",
        text: "0.01 J",
      },
      {
        key: "C",
        text: "0.02 J",
      },
      {
        key: "D",
        text: "0.04 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "U = ½CV² = 0.5 × 4 × 10⁻⁶ × 100² = 0.02 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-122",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Internal resistance",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T09",
    question:
      "A cell has emf 12 V and internal resistance 1 Ω. If the current is 2 A, what is its terminal voltage while supplying current?",
    options: [
      {
        key: "A",
        text: "8 V",
      },
      {
        key: "B",
        text: "10 V",
      },
      {
        key: "C",
        text: "12 V",
      },
      {
        key: "D",
        text: "14 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "For a discharging cell, V = E − Ir = 12 − (2 × 1) = 10 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-123",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Force on a current-carrying conductor",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T07",
    question:
      "A 0.5 m wire carries a current of 4 A perpendicular to a magnetic field of 0.2 T. What magnetic force acts on it?",
    options: [
      {
        key: "A",
        text: "0.1 N",
      },
      {
        key: "B",
        text: "0.2 N",
      },
      {
        key: "C",
        text: "0.4 N",
      },
      {
        key: "D",
        text: "0.8 N",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "F = BIL sin θ = 0.2 × 4 × 0.5 × 1 = 0.4 N.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-124",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Lenz's law",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T03",
    question:
      "Lenz's law states that the induced current flows in a direction that:",
    options: [
      {
        key: "A",
        text: "Always increases the magnetic flux",
      },
      {
        key: "B",
        text: "Opposes the change in magnetic flux that produces it",
      },
      {
        key: "C",
        text: "Is always clockwise",
      },
      {
        key: "D",
        text: "Is independent of magnetic flux",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The induced current creates a magnetic effect that opposes the change in flux responsible for inducing it.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-125",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Alternating current and voltage",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T01",
    question:
      "An alternating voltage has a peak value of 311 V. What is its approximate rms value?",
    options: [
      {
        key: "A",
        text: "110 V",
      },
      {
        key: "B",
        text: "155.5 V",
      },
      {
        key: "C",
        text: "220 V",
      },
      {
        key: "D",
        text: "311 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For a sinusoidal voltage, Vrms = Vpeak/√2 ≈ 311/1.414 ≈ 220 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-126",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Inductive and capacitive reactance",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T08",
    question:
      "A 100 μF capacitor is connected to a 50 Hz AC supply. What is its approximate capacitive reactance?",
    options: [
      {
        key: "A",
        text: "3.18 Ω",
      },
      {
        key: "B",
        text: "31.8 Ω",
      },
      {
        key: "C",
        text: "318 Ω",
      },
      {
        key: "D",
        text: "3180 Ω",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Xc = 1/(2πfC) = 1/[2π × 50 × 100 × 10⁻⁶] ≈ 31.8 Ω.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-127",
    class: 12,
    subject: "Physics",
    topic: "Wave Motion",
    subtopic: "Wave speed",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T08",
    question:
      "What is the approximate speed of electromagnetic waves in a vacuum?",
    options: [
      {
        key: "A",
        text: "3 × 10⁶ m/s",
      },
      {
        key: "B",
        text: "3 × 10⁷ m/s",
      },
      {
        key: "C",
        text: "3 × 10⁸ m/s",
      },
      {
        key: "D",
        text: "3 × 10⁹ m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "All electromagnetic waves travel in vacuum at approximately 3 × 10⁸ m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY11-121",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Power of a lens",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T10",
    question:
      "An object is placed 30 cm in front of a convex lens of focal length 15 cm. Where is the image formed?",
    options: [
      {
        key: "A",
        text: "15 cm on the object side",
      },
      {
        key: "B",
        text: "15 cm on the opposite side",
      },
      {
        key: "C",
        text: "30 cm on the opposite side",
      },
      {
        key: "D",
        text: "At infinity",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Using 1/f = 1/v − 1/u with Cartesian signs, f = +15 cm and u = −30 cm gives v = +30 cm, so the image forms 30 cm on the opposite side.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-128",
    class: 12,
    subject: "Physics",
    topic: "Interference of Light",
    subtopic: "Young's double-slit experiment",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T07",
    question:
      "In Young's double-slit experiment, the wavelength is 600 nm, the screen distance is 2 m, and slit separation is 0.5 mm. What is the fringe width?",
    options: [
      {
        key: "A",
        text: "0.24 mm",
      },
      {
        key: "B",
        text: "1.2 mm",
      },
      {
        key: "C",
        text: "2.4 mm",
      },
      {
        key: "D",
        text: "4.8 mm",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "β = λD/d = (600 × 10⁻⁹ × 2)/(0.5 × 10⁻³) = 2.4 × 10⁻³ m = 2.4 mm.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-129",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Threshold frequency",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T09",
    question:
      "In the photoelectric effect, no electrons are emitted when the incident light frequency is:",
    options: [
      {
        key: "A",
        text: "Greater than the threshold frequency",
      },
      {
        key: "B",
        text: "Equal to or greater than the threshold frequency",
      },
      {
        key: "C",
        text: "Below the threshold frequency",
      },
      {
        key: "D",
        text: "Twice the threshold frequency",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "If the incident frequency is below the threshold frequency, photon energy is insufficient to overcome the material's work function.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-130",
    class: 12,
    subject: "Physics",
    topic: "Quantization of Energy",
    subtopic: "Bohr's model of the hydrogen atom",
    topicId: "PHY12-CH23",
    subtopicId: "PHY12-CH23-T06",
    question:
      "In the Bohr model of hydrogen, the energy of an electron in the ground state is approximately:",
    options: [
      {
        key: "A",
        text: "−3.4 eV",
      },
      {
        key: "B",
        text: "−6.8 eV",
      },
      {
        key: "C",
        text: "−13.6 eV",
      },
      {
        key: "D",
        text: "−27.2 eV",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The ground-state energy of hydrogen in the Bohr model is −13.6 eV.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-131",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Mass-energy equivalence",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T10",
    question:
      "What energy is equivalent to a mass defect of 1 u? Use 1 u ≈ 931.5 MeV/c².",
    options: [
      {
        key: "A",
        text: "93.15 MeV",
      },
      {
        key: "B",
        text: "186.3 MeV",
      },
      {
        key: "C",
        text: "465.75 MeV",
      },
      {
        key: "D",
        text: "931.5 MeV",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Using E = mc², a mass defect of 1 u corresponds to approximately 931.5 MeV of energy.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-132",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Doping",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T05",
    question:
      "Which impurity is commonly added to silicon to produce an n-type semiconductor?",
    options: [
      {
        key: "A",
        text: "Boron",
      },
      {
        key: "B",
        text: "Gallium",
      },
      {
        key: "C",
        text: "Phosphorus",
      },
      {
        key: "D",
        text: "Aluminium",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Phosphorus is pentavalent and contributes extra electrons when used to dope silicon, producing an n-type semiconductor.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    id: "PHY12-133",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Semiconductor diode",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T11",
    question: "A conventional p-n junction diode is forward biased when:",
    options: [
      {
        key: "A",
        text: "The p-side is connected to the negative terminal and the n-side to the positive terminal",
      },
      {
        key: "B",
        text: "The p-side is connected to the positive terminal and the n-side to the negative terminal",
      },
      {
        key: "C",
        text: "Both sides are connected to the positive terminal",
      },
      {
        key: "D",
        text: "No external voltage is applied",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Forward bias connects the p-side to the positive terminal and the n-side to the negative terminal, reducing the depletion barrier.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note:
      "NEB-style practice; verify against the current official syllabus.",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Physical quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T01",
    question: "Which of the following is considered a fundamental quantity?",
    options: [
      {
        key: "A",
        text: "Length",
      },
      {
        key: "B",
        text: "Volume",
      },
      {
        key: "C",
        text: "Density",
      },
      {
        key: "D",
        text: "Speed",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Fundamental quantities are independent and cannot be expressed in terms of other quantities. Length is considered a fundamental quantity in physics, while volume, density, and speed are derived quantities.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-122",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Significant figures",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T09",
    question: "How many significant figures are in the number 0.004560?",
    options: [
      {
        key: "A",
        text: "3",
      },
      {
        key: "B",
        text: "4",
      },
      {
        key: "C",
        text: "5",
      },
      {
        key: "D",
        text: "6",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The number 0.004560 has four significant figures. The leading zeros are not counted, but the digits 4, 5, and 6, along with the trailing zero, are significant.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-123",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Measurement errors",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T10",
    question:
      "Which type of error is introduced by the limitations of measuring instruments?",
    options: [
      {
        key: "A",
        text: "Random error",
      },
      {
        key: "B",
        text: "Systematic error",
      },
      {
        key: "C",
        text: "Human error",
      },
      {
        key: "D",
        text: "Blunder",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Systematic errors arise from imperfections in the measuring instruments or procedures, leading to consistent deviations from the true value. Random errors, on the other hand, are due to unpredictable fluctuations.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-124",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensional analysis",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T07",
    question:
      "Using dimensional analysis, which of the following quantities has the dimension of [M^1L^2T^-2]?",
    options: [
      {
        key: "A",
        text: "Work",
      },
      {
        key: "B",
        text: "Force",
      },
      {
        key: "C",
        text: "Energy",
      },
      {
        key: "D",
        text: "Pressure",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Work is defined as the product of force and displacement. Its dimension is given by [F][d] = [M^1L^1T^-2][L^1] = [M^1L^2T^-2]. Energy has the same dimensional formula as work since they are essentially equivalent.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-125",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "A lever arm of length 2 meters is used to apply a force of 50 Newtons perpendicular to the lever. What is the torque produced about the pivot point?",
    options: [
      {
        key: "A",
        text: "100 Nm",
      },
      {
        key: "B",
        text: "50 Nm",
      },
      {
        key: "C",
        text: "25 Nm",
      },
      {
        key: "D",
        text: "200 Nm",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Torque is calculated using the formula τ = r × F, where τ is the torque, r is the lever arm length, and F is the force applied. Here, τ = 2 m × 50 N = 100 Nm.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-134",
  },
  {
    id: "PHY12-135",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Applications of fluid mechanics",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T16",
    question: "The slope of a velocity–time graph represents:",
    options: [
      {
        key: "A",
        text: "Displacement",
      },
      {
        key: "B",
        text: "Acceleration",
      },
      {
        key: "C",
        text: "Jerk",
      },
      {
        key: "D",
        text: "Speed",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Slope = Δv/Δt, which is acceleration.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-126",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Friction",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T13",
    question:
      "A 5 kg block on a rough horizontal surface (μ = 0.2) is pushed by a 20 N force. What is its acceleration? (g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "4 m/s²",
      },
      {
        key: "B",
        text: "6 m/s²",
      },
      {
        key: "C",
        text: "2 m/s²",
      },
      {
        key: "D",
        text: "1 m/s²",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Friction = 0.2 × 50 = 10 N; a = (20 − 10)/5 = 2 m/s².",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-127",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Average and instantaneous power",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T14",
    question:
      "A body falls freely from a height of 20 m. What is its speed just before hitting the ground? (g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "10 m/s",
      },
      {
        key: "B",
        text: "20 m/s",
      },
      {
        key: "C",
        text: "40 m/s",
      },
      {
        key: "D",
        text: "200 m/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "v = √(2gh) = √(2 × 10 × 20) = 20 m/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-128",
    class: 11,
    subject: "Physics",
    topic: "Quantity of Heat",
    subtopic: "Latent heat",
    topicId: "PHY11-CH11",
    subtopicId: "PHY11-CH11-T06",
    question:
      "How much heat is needed to melt 100 g of ice at 0°C? (Latent heat of fusion = 336 J/g)",
    options: [
      {
        key: "A",
        text: "3360 J",
      },
      {
        key: "B",
        text: "33600 J",
      },
      {
        key: "C",
        text: "336 J",
      },
      {
        key: "D",
        text: "336000 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Q = mL = 100 × 336 = 33600 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-136",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Spring-mass system",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T09",
    question:
      "What is the time period of a 0.1 kg mass attached to a spring of force constant 40 N/m?",
    options: [
      {
        key: "A",
        text: "3.14 s",
      },
      {
        key: "B",
        text: "0.314 s",
      },
      {
        key: "C",
        text: "0.0314 s",
      },
      {
        key: "D",
        text: "6.28 s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "T = 2π√(m/k) = 2π√(0.1/40) = 2π × 0.05 ≈ 0.314 s.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-137",
    class: 12,
    subject: "Physics",
    topic: "Mechanical Waves",
    subtopic: "Interference of sound waves",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T11",
    question:
      "Which of the following are true for sound waves in air? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "They are longitudinal waves",
      },
      {
        key: "B",
        text: "They require a material medium",
      },
      {
        key: "C",
        text: "They are transverse waves",
      },
      {
        key: "D",
        text: "They can travel through a vacuum",
      },
    ],
    correct_options: ["A", "B"],
    is_multi_select: true,
    explanation:
      "Sound is a longitudinal mechanical wave and cannot travel through a vacuum.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-129",
    class: 11,
    subject: "Physics",
    topic: "Solids",
    subtopic: "Conductors",
    topicId: "PHY11-CH25",
    subtopicId: "PHY11-CH25-T06",
    question:
      "The electric field inside a charged conductor in electrostatic equilibrium is:",
    options: [
      {
        key: "A",
        text: "Maximum",
      },
      {
        key: "B",
        text: "Zero",
      },
      {
        key: "C",
        text: "Infinite",
      },
      {
        key: "D",
        text: "Dependent on the charge",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Free charges rearrange until the net field inside the conductor is zero.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-130",
    class: 11,
    subject: "Physics",
    topic: "DC Circuits",
    subtopic: "Resistance",
    topicId: "PHY11-CH23",
    subtopicId: "PHY11-CH23-T05",
    question:
      "A wire of resistance 10 Ω is uniformly stretched to double its length (volume constant). What is its new resistance?",
    options: [
      {
        key: "A",
        text: "20 Ω",
      },
      {
        key: "B",
        text: "40 Ω",
      },
      {
        key: "C",
        text: "80 Ω",
      },
      {
        key: "D",
        text: "10 Ω",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "R ∝ l²/V, so doubling l makes R four times: 40 Ω.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-131",
    class: 11,
    subject: "Physics",
    topic: "Electric Field",
    subtopic: "Motion of a charge in an electric field",
    topicId: "PHY11-CH20",
    subtopicId: "PHY11-CH20-T11",
    question:
      "The time period of a charged particle moving in a circle in a uniform magnetic field depends on:",
    options: [
      {
        key: "A",
        text: "Its speed only",
      },
      {
        key: "B",
        text: "The radius of its path only",
      },
      {
        key: "C",
        text: "Its charge, mass and the magnetic field",
      },
      {
        key: "D",
        text: "Its kinetic energy only",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "T = 2πm/(qB), independent of speed and radius.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-138",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Faraday's laws of electromagnetic induction",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T02",
    question:
      "The magnetic flux through a coil changes from 0.4 Wb to 0.1 Wb in 0.1 s. What is the magnitude of the induced emf?",
    options: [
      {
        key: "A",
        text: "0.3 V",
      },
      {
        key: "B",
        text: "3 V",
      },
      {
        key: "C",
        text: "5 V",
      },
      {
        key: "D",
        text: "30 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "|e| = ΔΦ/Δt = 0.3/0.1 = 3 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-139",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Power in AC circuits",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T13",
    question: "What is the power factor of a purely resistive AC circuit?",
    options: [
      {
        key: "A",
        text: "0",
      },
      {
        key: "B",
        text: "0.5",
      },
      {
        key: "C",
        text: "1",
      },
      {
        key: "D",
        text: "Infinity",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "The phase difference is zero, so cos φ = 1.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-132",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Combination of thin lenses",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T11",
    question:
      "An object is placed 30 cm from a convex lens of focal length 10 cm. What is the magnification?",
    options: [
      {
        key: "A",
        text: "0.5",
      },
      {
        key: "B",
        text: "2",
      },
      {
        key: "C",
        text: "−0.5",
      },
      {
        key: "D",
        text: "−2",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "1/v = 1/10 − 1/30 gives v = 15 cm, so m = v/u = −0.5.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-140",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Energy of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T03",
    question:
      "What is the energy of a photon of wavelength 600 nm? (hc = 1240 eV nm)",
    options: [
      {
        key: "A",
        text: "1.24 eV",
      },
      {
        key: "B",
        text: "2.07 eV",
      },
      {
        key: "C",
        text: "4.14 eV",
      },
      {
        key: "D",
        text: "0.5 eV",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "E = 1240/600 ≈ 2.07 eV.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-133",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Projectile motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T14",
    question:
      "A projectile is fired at 30° to the horizontal with a speed of 20 m/s. What is its maximum height? (g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "10 m",
      },
      {
        key: "B",
        text: "20 m",
      },
      {
        key: "C",
        text: "5 m",
      },
      {
        key: "D",
        text: "2.5 m",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "H = u²sin²θ/2g = 400 × 0.25/20 = 5 m.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-141",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Moment of inertia",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T04",
    question:
      "A ring and a solid disc have the same mass M and radius R. What is the ratio of their moments of inertia about the central axis perpendicular to the plane (ring : disc)?",
    options: [
      {
        key: "A",
        text: "1 : 2",
      },
      {
        key: "B",
        text: "2 : 1",
      },
      {
        key: "C",
        text: "1 : 1",
      },
      {
        key: "D",
        text: "4 : 1",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "I(ring) = MR² and I(disc) = ½MR², so the ratio is 2 : 1.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-134",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Motion of satellites",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T10",
    question:
      "What is the approximate orbital speed of a satellite revolving very close to the Earth's surface? (g = 10 m/s², R = 6.4 × 10⁶ m)",
    options: [
      {
        key: "A",
        text: "3.1 km/s",
      },
      {
        key: "B",
        text: "8 km/s",
      },
      {
        key: "C",
        text: "11.2 km/s",
      },
      {
        key: "D",
        text: "1 km/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "v = √(gR) = √(10 × 6.4 × 10⁶) = 8000 m/s = 8 km/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-142",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Equation of continuity",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T14",
    question:
      "Water flows at 2 m/s through a pipe of cross-section 4 cm² which narrows to 1 cm². What is the speed in the narrow part?",
    options: [
      {
        key: "A",
        text: "0.5 m/s",
      },
      {
        key: "B",
        text: "2 m/s",
      },
      {
        key: "C",
        text: "8 m/s",
      },
      {
        key: "D",
        text: "16 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A₁v₁ = A₂v₂, so v₂ = 4 × 2/1 = 8 m/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-135",
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Scalar and vector quantities",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T01",
    question:
      "Which of the following are vector quantities? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "Displacement",
      },
      {
        key: "B",
        text: "Speed",
      },
      {
        key: "C",
        text: "Torque",
      },
      {
        key: "D",
        text: "Work",
      },
    ],
    correct_options: ["A", "C"],
    is_multi_select: true,
    explanation:
      "Displacement and torque have both magnitude and direction; speed and work are scalars.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-136",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Zeroth law of thermodynamics",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T04",
    question:
      "If the absolute temperature of a black body is doubled, the power radiated increases by a factor of:",
    options: [
      {
        key: "A",
        text: "2",
      },
      {
        key: "B",
        text: "4",
      },
      {
        key: "C",
        text: "8",
      },
      {
        key: "D",
        text: "16",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation: "By Stefan's law, P ∝ T⁴, so doubling T gives 2⁴ = 16 times.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-143",
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Applications of the first law",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T16",
    question:
      "When a dielectric of constant K = 4 completely fills the space between the plates of a capacitor, its capacitance becomes:",
    options: [
      {
        key: "A",
        text: "2 times",
      },
      {
        key: "B",
        text: "4 times",
      },
      {
        key: "C",
        text: "1/4 times",
      },
      {
        key: "D",
        text: "Unchanged",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "C = KC₀, so the capacitance becomes 4 times.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-144",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Resonance in AC circuits",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T12",
    question:
      "What is the resonant frequency of an LC circuit with L = 1 H and C = 1 μF?",
    options: [
      {
        key: "A",
        text: "1000 Hz",
      },
      {
        key: "B",
        text: "6.28 Hz",
      },
      {
        key: "C",
        text: "159 Hz",
      },
      {
        key: "D",
        text: "100 Hz",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "f = 1/(2π√LC) = 1/(2π × 10⁻³) ≈ 159 Hz.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-145",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question:
      "What is the threshold wavelength for a metal of work function 2 eV? (hc = 1240 eV nm)",
    options: [
      {
        key: "A",
        text: "310 nm",
      },
      {
        key: "B",
        text: "620 nm",
      },
      {
        key: "C",
        text: "1240 nm",
      },
      {
        key: "D",
        text: "2480 nm",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "λ₀ = hc/φ = 1240/2 = 620 nm.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-146",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Radioactive decay law",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T04",
    question:
      "A sample of 80 g has a half-life of 10 days. How much remains after 30 days?",
    options: [
      {
        key: "A",
        text: "40 g",
      },
      {
        key: "B",
        text: "20 g",
      },
      {
        key: "C",
        text: "10 g",
      },
      {
        key: "D",
        text: "5 g",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "30 days is 3 half-lives: 80 → 40 → 20 → 10 g.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-147",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Magnetic field lines",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T02",
    question:
      "Which of the following are properties of magnetic field lines? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "They form closed loops",
      },
      {
        key: "B",
        text: "They never intersect",
      },
      {
        key: "C",
        text: "They start at the north pole and end at the south pole inside the magnet",
      },
      {
        key: "D",
        text: "They are closer together where the field is stronger",
      },
    ],
    correct_options: ["A", "B", "D"],
    is_multi_select: true,
    explanation:
      "Field lines form closed loops (south to north inside a magnet), never cross, and crowd together where B is strong.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-148",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Transistors",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T16",
    question:
      "A transistor has base current 20 μA and collector current 2 mA. What is its current gain β?",
    options: [
      {
        key: "A",
        text: "10",
      },
      {
        key: "B",
        text: "100",
      },
      {
        key: "C",
        text: "1000",
      },
      {
        key: "D",
        text: "0.01",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "β = Ic/Ib = 2 mA/20 μA = 100.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-137",
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensions of physical quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T05",
    question: "What is the dimensional formula of force?",
    options: [
      {
        key: "A",
        text: "MLT⁻¹",
      },
      {
        key: "B",
        text: "MLT⁻²",
      },
      {
        key: "C",
        text: "ML²T⁻²",
      },
      {
        key: "D",
        text: "ML⁻¹T⁻²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "F = ma, so [F] = M × LT⁻² = MLT⁻².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-138",
    class: 11,
    subject: "Physics",
    topic: "Vectors",
    subtopic: "Resolution of vectors",
    topicId: "PHY11-CH02",
    subtopicId: "PHY11-CH02-T09",
    question:
      "Two perpendicular forces of 3 N and 4 N act on a body. What is the magnitude of the resultant?",
    options: [
      {
        key: "A",
        text: "7 N",
      },
      {
        key: "B",
        text: "5 N",
      },
      {
        key: "C",
        text: "1 N",
      },
      {
        key: "D",
        text: "12 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "R = √(3² + 4²) = 5 N.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-139",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Kinetic energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T05",
    question:
      "In a perfectly inelastic collision, which quantity is NOT conserved?",
    options: [
      {
        key: "A",
        text: "Linear momentum",
      },
      {
        key: "B",
        text: "Kinetic energy",
      },
      {
        key: "C",
        text: "Total mass",
      },
      {
        key: "D",
        text: "Total energy",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Kinetic energy is partly converted to other forms in an inelastic collision.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-149",
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "First law of thermodynamics",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T06",
    question:
      "A system absorbs 500 J of heat and does 200 J of work. What is the change in internal energy?",
    options: [
      {
        key: "A",
        text: "700 J",
      },
      {
        key: "B",
        text: "300 J",
      },
      {
        key: "C",
        text: "−300 J",
      },
      {
        key: "D",
        text: "100 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "ΔU = Q − W = 500 − 200 = 300 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-140",
    class: 11,
    subject: "Physics",
    topic: "Refraction at Plane Surfaces",
    subtopic: "Total internal reflection",
    topicId: "PHY11-CH15",
    subtopicId: "PHY11-CH15-T10",
    question:
      "What is the critical angle for glass of refractive index 1.5 in air?",
    options: [
      {
        key: "A",
        text: "30°",
      },
      {
        key: "B",
        text: "41.8°",
      },
      {
        key: "C",
        text: "60°",
      },
      {
        key: "D",
        text: "48.6°",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "sin C = 1/1.5 = 0.667, so C ≈ 41.8°.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-150",
    class: 12,
    subject: "Physics",
    topic: "Interference of Light",
    subtopic: "Young's double-slit experiment",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T07",
    question:
      "In Young's double-slit experiment, if the screen distance D is doubled, the fringe width:",
    options: [
      {
        key: "A",
        text: "Halves",
      },
      {
        key: "B",
        text: "Doubles",
      },
      {
        key: "C",
        text: "Remains the same",
      },
      {
        key: "D",
        text: "Becomes four times",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "β = λD/d is directly proportional to D.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-151",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Internal resistance",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T09",
    question:
      "A cell of emf 2 V and internal resistance 0.5 Ω is connected to a 1.5 Ω resistor. What current flows?",
    options: [
      {
        key: "A",
        text: "4 A",
      },
      {
        key: "B",
        text: "0.5 A",
      },
      {
        key: "C",
        text: "1 A",
      },
      {
        key: "D",
        text: "1.33 A",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "I = E/(R + r) = 2/2 = 1 A.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-141",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Rest and motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T01",
    question:
      "A car starts from rest and accelerates uniformly at 2 m/s² for 5 s. What distance does it cover?",
    options: [
      {
        key: "A",
        text: "10 m",
      },
      {
        key: "B",
        text: "25 m",
      },
      {
        key: "C",
        text: "50 m",
      },
      {
        key: "D",
        text: "12.5 m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "s = ut + ½at² = ½ × 2 × 25 = 25 m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-142",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Free fall",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T12",
    question:
      "How long does a stone dropped from a height of 45 m take to reach the ground? (g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "2 s",
      },
      {
        key: "B",
        text: "3 s",
      },
      {
        key: "C",
        text: "4.5 s",
      },
      {
        key: "D",
        text: "9 s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "t = √(2h/g) = √(90/10) = 3 s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-143",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Applications of Newton's laws",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T08",
    question:
      "A 60 kg person stands in a lift accelerating upward at 2 m/s². What is the apparent weight? (g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "600 N",
      },
      {
        key: "B",
        text: "720 N",
      },
      {
        key: "C",
        text: "480 N",
      },
      {
        key: "D",
        text: "1200 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "N = m(g + a) = 60 × 12 = 720 N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-144",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Conservation of linear momentum",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T07",
    question:
      "A 2 kg body moving at 3 m/s collides and sticks to a 1 kg body at rest. What is their common velocity?",
    options: [
      {
        key: "A",
        text: "1 m/s",
      },
      {
        key: "B",
        text: "2 m/s",
      },
      {
        key: "C",
        text: "3 m/s",
      },
      {
        key: "D",
        text: "1.5 m/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Momentum conservation: 2 × 3 = 3v, so v = 2 m/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-145",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Average and instantaneous power",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T14",
    question:
      "A force of 10 N displaces a body by 5 m at an angle of 60° to the force. How much work is done?",
    options: [
      {
        key: "A",
        text: "50 J",
      },
      {
        key: "B",
        text: "25 J",
      },
      {
        key: "C",
        text: "43.3 J",
      },
      {
        key: "D",
        text: "12.5 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "W = Fs cosθ = 10 × 5 × 0.5 = 25 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-146",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Escape velocity",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T12",
    question:
      "What is the approximate escape velocity from the surface of the Earth?",
    options: [
      {
        key: "A",
        text: "7.9 km/s",
      },
      {
        key: "B",
        text: "11.2 km/s",
      },
      {
        key: "C",
        text: "9.8 km/s",
      },
      {
        key: "D",
        text: "3 × 10⁵ km/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The escape velocity of Earth is about 11.2 km/s (7.9 km/s is the orbital velocity).",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-147",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Variation of gravitational acceleration",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T06",
    question:
      "What is the acceleration due to gravity at a height equal to the Earth's radius above the surface?",
    options: [
      {
        key: "A",
        text: "g/2",
      },
      {
        key: "B",
        text: "g/4",
      },
      {
        key: "C",
        text: "g/9",
      },
      {
        key: "D",
        text: "2g",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "g′ = gR²/(R + h)² = g/4 when h = R.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-148",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Elasticity",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T02",
    question:
      "What energy is stored in a spring of force constant 200 N/m stretched by 0.1 m?",
    options: [
      {
        key: "A",
        text: "2 J",
      },
      {
        key: "B",
        text: "1 J",
      },
      {
        key: "C",
        text: "10 J",
      },
      {
        key: "D",
        text: "20 J",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "U = ½kx² = ½ × 200 × 0.01 = 1 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-149",
    class: 11,
    subject: "Physics",
    topic: "Ideal Gas",
    subtopic: "Kinetic theory of gases",
    topicId: "PHY11-CH13",
    subtopicId: "PHY11-CH13-T10",
    question:
      "If the absolute temperature of a gas is increased four times, its rms speed:",
    options: [
      {
        key: "A",
        text: "Doubles",
      },
      {
        key: "B",
        text: "Becomes four times",
      },
      {
        key: "C",
        text: "Becomes half",
      },
      {
        key: "D",
        text: "Remains unchanged",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "vrms ∝ √T, so quadrupling T doubles vrms.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-154",
    class: 11,
    subject: "Physics",
    topic: "Electric Charges",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH19",
    subtopicId: "PHY11-CH19-T09",
    question:
      "Two charges of 2 μC and 3 μC are 3 m apart in air. What is the force between them? (k = 9 × 10⁹ N m²/C²)",
    options: [
      {
        key: "A",
        text: "6 × 10⁻³ N",
      },
      {
        key: "B",
        text: "1.8 × 10⁻² N",
      },
      {
        key: "C",
        text: "2 × 10⁻³ N",
      },
      {
        key: "D",
        text: "6 N",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "F = kq₁q₂/r² = 9×10⁹ × 6×10⁻¹² / 9 = 6 × 10⁻³ N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-157",
    class: 12,
    subject: "Physics",
    topic: "First Law of Thermodynamics",
    subtopic: "Applications of the first law",
    topicId: "PHY12-CH04",
    subtopicId: "PHY12-CH04-T16",
    question:
      "The electric flux through a closed surface enclosing a charge q in vacuum is:",
    options: [
      {
        key: "A",
        text: "qε₀",
      },
      {
        key: "B",
        text: "q/ε₀",
      },
      {
        key: "C",
        text: "Zero",
      },
      {
        key: "D",
        text: "q²/ε₀",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Gauss's law: Φ = q/ε₀.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-155",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Capacitors",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T02",
    question:
      "Capacitors of 3 μF and 6 μF are connected in series. What is the equivalent capacitance?",
    options: [
      {
        key: "A",
        text: "9 μF",
      },
      {
        key: "B",
        text: "2 μF",
      },
      {
        key: "C",
        text: "4.5 μF",
      },
      {
        key: "D",
        text: "18 μF",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "C = (3 × 6)/(3 + 6) = 2 μF.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-156",
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "SI units",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T03",
    question: "What is the SI unit of resistivity?",
    options: [
      {
        key: "A",
        text: "Ohm",
      },
      {
        key: "B",
        text: "Ohm-metre",
      },
      {
        key: "C",
        text: "Ohm per metre",
      },
      {
        key: "D",
        text: "Siemens",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "ρ = RA/l, so its unit is Ω m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-158",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Wheatstone bridge",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T13",
    question:
      "In a balanced Wheatstone bridge, P = 10 Ω, Q = 20 Ω and R = 15 Ω. What is S?",
    options: [
      {
        key: "A",
        text: "7.5 Ω",
      },
      {
        key: "B",
        text: "30 Ω",
      },
      {
        key: "C",
        text: "20 Ω",
      },
      {
        key: "D",
        text: "15 Ω",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "P/Q = R/S gives S = 15 × 20/10 = 30 Ω.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-159",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Force on a current-carrying conductor",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T07",
    question:
      "A 0.5 m wire carrying 4 A is perpendicular to a 0.5 T field. What is the force on it?",
    options: [
      {
        key: "A",
        text: "0.25 N",
      },
      {
        key: "B",
        text: "1 N",
      },
      {
        key: "C",
        text: "2 N",
      },
      {
        key: "D",
        text: "4 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "F = BIL = 0.5 × 4 × 0.5 = 1 N.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-160",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Motional emf",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T05",
    question:
      "A 0.5 m rod moves at 4 m/s perpendicular to a 0.2 T field. What emf is induced?",
    options: [
      {
        key: "A",
        text: "0.1 V",
      },
      {
        key: "B",
        text: "0.4 V",
      },
      {
        key: "C",
        text: "0.8 V",
      },
      {
        key: "D",
        text: "4 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "e = Blv = 0.2 × 0.5 × 4 = 0.4 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-161",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Inductive and capacitive reactance",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T08",
    question:
      "If the frequency of an AC source is doubled, the capacitive reactance:",
    options: [
      {
        key: "A",
        text: "Doubles",
      },
      {
        key: "B",
        text: "Becomes half",
      },
      {
        key: "C",
        text: "Remains unchanged",
      },
      {
        key: "D",
        text: "Becomes four times",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Xc = 1/(2πfC) is inversely proportional to f.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-162",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Alternating current and voltage",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T01",
    question:
      "An ideal step-up transformer has a turns ratio Np : Ns = 1 : 10 and a 220 V primary. What is the secondary voltage?",
    options: [
      {
        key: "A",
        text: "22 V",
      },
      {
        key: "B",
        text: "220 V",
      },
      {
        key: "C",
        text: "2200 V",
      },
      {
        key: "D",
        text: "22000 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Vs/Vp = Ns/Np = 10, so Vs = 2200 V.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-163",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Momentum of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T04",
    question:
      "If the momentum of a particle is doubled, its de Broglie wavelength:",
    options: [
      {
        key: "A",
        text: "Doubles",
      },
      {
        key: "B",
        text: "Becomes half",
      },
      {
        key: "C",
        text: "Remains unchanged",
      },
      {
        key: "D",
        text: "Becomes four times",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "λ = h/p is inversely proportional to p.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-164",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Binding energy",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T12",
    question:
      "A mass defect of 0.01 u corresponds to how much energy? (1 u = 931.5 MeV)",
    options: [
      {
        key: "A",
        text: "931.5 MeV",
      },
      {
        key: "B",
        text: "93.15 MeV",
      },
      {
        key: "C",
        text: "9.315 MeV",
      },
      {
        key: "D",
        text: "0.9315 MeV",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "E = 0.01 × 931.5 = 9.315 MeV.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-157",
    class: 11,
    subject: "Physics",
    topic: "Circular Motion",
    subtopic: "Applications of circular motion",
    topicId: "PHY11-CH06",
    subtopicId: "PHY11-CH06-T13",
    question:
      "A body moves in a circle of radius 5 m at a constant speed of 10 m/s. What is its centripetal acceleration?",
    options: [
      {
        key: "A",
        text: "2 m/s²",
      },
      {
        key: "B",
        text: "20 m/s²",
      },
      {
        key: "C",
        text: "50 m/s²",
      },
      {
        key: "D",
        text: "10 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "a = v²/r = 100/5 = 20 m/s².",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-158",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Friction",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T13",
    question: "Limiting friction is directly proportional to:",
    options: [
      {
        key: "A",
        text: "Area of contact",
      },
      {
        key: "B",
        text: "Normal reaction",
      },
      {
        key: "C",
        text: "Speed of the body",
      },
      {
        key: "D",
        text: "Volume of the body",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "f = μR, so limiting friction is proportional to the normal reaction.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-159",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Average and instantaneous power",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T14",
    question: "A machine does 600 J of work in 10 s. What is its power?",
    options: [
      {
        key: "A",
        text: "6 W",
      },
      {
        key: "B",
        text: "60 W",
      },
      {
        key: "C",
        text: "600 W",
      },
      {
        key: "D",
        text: "6000 W",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "P = W/t = 600/10 = 60 W.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-165",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Applications of rotational dynamics",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T14",
    question:
      "A force of 10 N acts perpendicular to a spanner at 0.5 m from the nut. What is the torque?",
    options: [
      {
        key: "A",
        text: "20 N m",
      },
      {
        key: "B",
        text: "5 N m",
      },
      {
        key: "C",
        text: "0.05 N m",
      },
      {
        key: "D",
        text: "10 N m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "τ = F × r = 10 × 0.5 = 5 N m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-166",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Pressure variation with depth",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T03",
    question:
      "What is the gauge pressure at a depth of 10 m in water? (ρ = 1000 kg/m³, g = 10 m/s²)",
    options: [
      {
        key: "A",
        text: "10⁴ Pa",
      },
      {
        key: "B",
        text: "10⁵ Pa",
      },
      {
        key: "C",
        text: "10⁶ Pa",
      },
      {
        key: "D",
        text: "10³ Pa",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "P = ρgh = 1000 × 10 × 10 = 10⁵ Pa.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-160",
    class: 11,
    subject: "Physics",
    topic: "Quantity of Heat",
    subtopic: "Calorimetry",
    topicId: "PHY11-CH11",
    subtopicId: "PHY11-CH11-T04",
    question:
      "How much heat is needed to raise the temperature of 2 kg of water by 5°C? (c = 4200 J kg⁻¹ K⁻¹)",
    options: [
      {
        key: "A",
        text: "4200 J",
      },
      {
        key: "B",
        text: "8400 J",
      },
      {
        key: "C",
        text: "42000 J",
      },
      {
        key: "D",
        text: "21000 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Q = mcΔθ = 2 × 4200 × 5 = 42000 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-161",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Concept of heat",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T01",
    question: "Which mode of heat transfer does not require a material medium?",
    options: [
      {
        key: "A",
        text: "Conduction",
      },
      {
        key: "B",
        text: "Convection",
      },
      {
        key: "C",
        text: "Radiation",
      },
      {
        key: "D",
        text: "All of these",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Radiation can travel through a vacuum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-167",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Simple pendulum",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T10",
    question:
      "If the length of a simple pendulum is doubled, its time period becomes:",
    options: [
      {
        key: "A",
        text: "Double",
      },
      {
        key: "B",
        text: "√2 times",
      },
      {
        key: "C",
        text: "Half",
      },
      {
        key: "D",
        text: "Unchanged",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "T = 2π√(L/g), so T ∝ √L; doubling L multiplies T by √2.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-162",
    class: 11,
    subject: "Physics",
    topic: "Electric Field",
    subtopic: "Electric field",
    topicId: "PHY11-CH20",
    subtopicId: "PHY11-CH20-T01",
    question:
      "Which of the following are units of electric field? (Select all that apply)",
    options: [
      {
        key: "A",
        text: "N/C",
      },
      {
        key: "B",
        text: "V/m",
      },
      {
        key: "C",
        text: "J/C",
      },
      {
        key: "D",
        text: "C/N",
      },
    ],
    correct_options: ["A", "B"],
    is_multi_select: true,
    explanation:
      "Electric field E = F/q (N/C) and also E = V/d (V/m). J/C is the unit of potential.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-168",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Kirchhoff's laws",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T06",
    question: "Kirchhoff's junction (current) law is based on conservation of:",
    options: [
      {
        key: "A",
        text: "Energy",
      },
      {
        key: "B",
        text: "Charge",
      },
      {
        key: "C",
        text: "Momentum",
      },
      {
        key: "D",
        text: "Mass",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Total current entering a junction equals total leaving it, so charge is conserved.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-169",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Electric current",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T01",
    question:
      "What power is dissipated in a 5 Ω resistor carrying a 2 A current?",
    options: [
      {
        key: "A",
        text: "10 W",
      },
      {
        key: "B",
        text: "20 W",
      },
      {
        key: "C",
        text: "40 W",
      },
      {
        key: "D",
        text: "2.5 W",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "P = I²R = 4 × 5 = 20 W.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-170",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Magnetic field",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T01",
    question: "What is the SI unit of magnetic flux density?",
    options: [
      {
        key: "A",
        text: "Weber",
      },
      {
        key: "B",
        text: "Tesla",
      },
      {
        key: "C",
        text: "Henry",
      },
      {
        key: "D",
        text: "Farad",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Magnetic flux density is measured in tesla (Wb/m²).",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-171",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Self-inductance",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T09",
    question:
      "A coil of self-inductance 2 H has its current changing at 3 A/s. What is the induced emf?",
    options: [
      {
        key: "A",
        text: "1.5 V",
      },
      {
        key: "B",
        text: "6 V",
      },
      {
        key: "C",
        text: "5 V",
      },
      {
        key: "D",
        text: "0.67 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "|e| = L(dI/dt) = 2 × 3 = 6 V.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-163",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Combination of thin lenses",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T11",
    question: "What is the power of a lens of focal length 50 cm?",
    options: [
      {
        key: "A",
        text: "0.5 D",
      },
      {
        key: "B",
        text: "2 D",
      },
      {
        key: "C",
        text: "50 D",
      },
      {
        key: "D",
        text: "0.02 D",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "P = 1/f (in metres) = 1/0.5 = 2 D.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-172",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question:
      "Photons of energy 5 eV fall on a metal of work function 2 eV. What is the maximum kinetic energy of the emitted electrons?",
    options: [
      {
        key: "A",
        text: "7 eV",
      },
      {
        key: "B",
        text: "3 eV",
      },
      {
        key: "C",
        text: "2 eV",
      },
      {
        key: "D",
        text: "2.5 eV",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "KEmax = hf − φ = 5 − 2 = 3 eV.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-173",
    class: 12,
    subject: "Physics",
    topic: "Quantization of Energy",
    subtopic: "Bohr's model of the hydrogen atom",
    topicId: "PHY12-CH23",
    subtopicId: "PHY12-CH23-T06",
    question:
      "What is the energy of the electron in the n = 2 orbit of hydrogen?",
    options: [
      {
        key: "A",
        text: "−13.6 eV",
      },
      {
        key: "B",
        text: "−6.8 eV",
      },
      {
        key: "C",
        text: "−3.4 eV",
      },
      {
        key: "D",
        text: "−1.51 eV",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Eₙ = −13.6/n² = −13.6/4 = −3.4 eV.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-174",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Applications of fluid mechanics",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T16",
    question:
      "A body is thrown vertically upward with a speed of 20 m/s. Taking g = 10 m/s², what maximum height does it reach?",
    options: [
      {
        key: "A",
        text: "10 m",
      },
      {
        key: "B",
        text: "20 m",
      },
      {
        key: "C",
        text: "40 m",
      },
      {
        key: "D",
        text: "5 m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "H = u²/2g = 400/20 = 20 m.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-164",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Projectile motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T14",
    question:
      "For a given speed of projection, the horizontal range of a projectile is maximum when the angle of projection is:",
    options: [
      {
        key: "A",
        text: "30°",
      },
      {
        key: "B",
        text: "45°",
      },
      {
        key: "C",
        text: "60°",
      },
      {
        key: "D",
        text: "90°",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Range R = u² sin2θ / g is maximum when sin2θ = 1, i.e. θ = 45°.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-165",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Momentum",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T05",
    question: "What is the momentum of a 0.5 kg ball moving at 4 m/s?",
    options: [
      {
        key: "A",
        text: "2 kg m/s",
      },
      {
        key: "B",
        text: "8 kg m/s",
      },
      {
        key: "C",
        text: "0.125 kg m/s",
      },
      {
        key: "D",
        text: "4 kg m/s",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "p = mv = 0.5 × 4 = 2 kg m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-166",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Elasticity",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T02",
    question: "Young's modulus is defined as the ratio of:",
    options: [
      {
        key: "A",
        text: "Volumetric stress to volumetric strain",
      },
      {
        key: "B",
        text: "Longitudinal stress to longitudinal strain",
      },
      {
        key: "C",
        text: "Shear stress to shear strain",
      },
      {
        key: "D",
        text: "Force to area",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Y = longitudinal stress / longitudinal strain within the elastic limit.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-167",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Concept of temperature",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T02",
    question:
      "Which law states that at constant temperature the pressure of a fixed mass of gas is inversely proportional to its volume?",
    options: [
      {
        key: "A",
        text: "Charles' law",
      },
      {
        key: "B",
        text: "Boyle's law",
      },
      {
        key: "C",
        text: "Gay-Lussac's law",
      },
      {
        key: "D",
        text: "Avogadro's law",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Boyle's law: PV = constant at constant temperature.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-168",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Variation of gravitational acceleration",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T06",
    question: "The acceleration due to gravity at the centre of the Earth is:",
    options: [
      {
        key: "A",
        text: "9.8 m/s²",
      },
      {
        key: "B",
        text: "Zero",
      },
      {
        key: "C",
        text: "Infinite",
      },
      {
        key: "D",
        text: "4.9 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "g inside the Earth decreases linearly with depth and becomes zero at the centre.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-175",
    class: 12,
    subject: "Physics",
    topic: "Mechanical Waves",
    subtopic: "Sound waves",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T02",
    question: "The speed of sound in air at room temperature is approximately:",
    options: [
      {
        key: "A",
        text: "34 m/s",
      },
      {
        key: "B",
        text: "340 m/s",
      },
      {
        key: "C",
        text: "3400 m/s",
      },
      {
        key: "D",
        text: "3 × 10⁸ m/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "The speed of sound in air at about 20°C is roughly 340 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-169",
    class: 11,
    subject: "Physics",
    topic: "Reflection at Curved Mirrors",
    subtopic: "Spherical mirrors",
    topicId: "PHY11-CH14",
    subtopicId: "PHY11-CH14-T02",
    question:
      "A concave mirror has a radius of curvature of 20 cm. What is its focal length?",
    options: [
      {
        key: "A",
        text: "5 cm",
      },
      {
        key: "B",
        text: "10 cm",
      },
      {
        key: "C",
        text: "20 cm",
      },
      {
        key: "D",
        text: "40 cm",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "f = R/2 = 10 cm.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-170",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Capacitors",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T02",
    question: "What energy is stored in a 4 μF capacitor charged to 10 V?",
    options: [
      {
        key: "A",
        text: "200 μJ",
      },
      {
        key: "B",
        text: "400 μJ",
      },
      {
        key: "C",
        text: "40 μJ",
      },
      {
        key: "D",
        text: "20 μJ",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "U = ½CV² = ½ × 4×10⁻⁶ × 100 = 2×10⁻⁴ J = 200 μJ.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-176",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Measurement of electromotive force",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T12",
    question:
      "Resistors of 3 Ω and 6 Ω are connected in parallel. What is the equivalent resistance?",
    options: [
      {
        key: "A",
        text: "9 Ω",
      },
      {
        key: "B",
        text: "2 Ω",
      },
      {
        key: "C",
        text: "4.5 Ω",
      },
      {
        key: "D",
        text: "18 Ω",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "R = (3×6)/(3+6) = 2 Ω.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-177",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Magnetic force on a moving charge",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T04",
    question:
      "What is the magnetic force on a charge moving parallel to a uniform magnetic field?",
    options: [
      {
        key: "A",
        text: "Maximum",
      },
      {
        key: "B",
        text: "Zero",
      },
      {
        key: "C",
        text: "qvB",
      },
      {
        key: "D",
        text: "qvB/2",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "F = qvB sinθ; for θ = 0° or 180°, F = 0.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-178",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Lenz's law",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T03",
    question: "Lenz's law is a consequence of conservation of:",
    options: [
      {
        key: "A",
        text: "Charge",
      },
      {
        key: "B",
        text: "Energy",
      },
      {
        key: "C",
        text: "Momentum",
      },
      {
        key: "D",
        text: "Mass",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The induced current opposes the change causing it, which follows from conservation of energy.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-179",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Mean value of alternating current",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T04",
    question: "An AC has a peak voltage of 10 V. What is its rms voltage?",
    options: [
      {
        key: "A",
        text: "5 V",
      },
      {
        key: "B",
        text: "7.07 V",
      },
      {
        key: "C",
        text: "10 V",
      },
      {
        key: "D",
        text: "14.14 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Vrms = V₀/√2 = 10/1.414 ≈ 7.07 V.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-180",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Radioactive decay law",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T04",
    question:
      "What fraction of a radioactive sample remains after two half-lives?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/4",
      },
      {
        key: "C",
        text: "1/8",
      },
      {
        key: "D",
        text: "Zero",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "After n half-lives the fraction left is (1/2)ⁿ = 1/4.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-181",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "P-N junction",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T08",
    question:
      "When a p-n junction is forward biased, the width of the depletion region:",
    options: [
      {
        key: "A",
        text: "Increases",
      },
      {
        key: "B",
        text: "Decreases",
      },
      {
        key: "C",
        text: "Remains unchanged",
      },
      {
        key: "D",
        text: "Becomes infinite",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Forward bias pushes majority carriers toward the junction, narrowing the depletion layer.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-182",
    class: 12,
    subject: "Physics",
    topic: "Wave Motion",
    subtopic: "Wave motion",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T01",
    question: "Which phenomenon shows that light waves are transverse?",
    options: [
      {
        key: "A",
        text: "Interference",
      },
      {
        key: "B",
        text: "Diffraction",
      },
      {
        key: "C",
        text: "Polarization",
      },
      {
        key: "D",
        text: "Reflection",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Only transverse waves can be polarized.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-171",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Applications of Newton's laws",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T08",
    question:
      "A body of mass 2 kg accelerates at 3 m/s². What is the net force acting on it?",
    options: [
      {
        key: "A",
        text: "1.5 N",
      },
      {
        key: "B",
        text: "6 N",
      },
      {
        key: "C",
        text: "5 N",
      },
      {
        key: "D",
        text: "0.67 N",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "F = ma = 2 × 3 = 6 N.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-172",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Average and instantaneous power",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T14",
    question: "What is the kinetic energy of a 2 kg body moving at 3 m/s?",
    options: [
      {
        key: "A",
        text: "3 J",
      },
      {
        key: "B",
        text: "6 J",
      },
      {
        key: "C",
        text: "9 J",
      },
      {
        key: "D",
        text: "18 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "KE = ½mv² = ½ × 2 × 3² = 9 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-173",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T11",
    question: "What is the SI unit of specific heat capacity?",
    options: [
      {
        key: "A",
        text: "J K⁻¹",
      },
      {
        key: "B",
        text: "J kg⁻¹ K⁻¹",
      },
      {
        key: "C",
        text: "J kg",
      },
      {
        key: "D",
        text: "W K⁻¹",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Specific heat capacity c = Q/(m·Δθ), so its unit is J kg⁻¹ K⁻¹.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-174",
    class: 11,
    subject: "Physics",
    topic: "Electric Charges",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH19",
    subtopicId: "PHY11-CH19-T09",
    question:
      "If the distance between two point charges is doubled, the electrostatic force between them becomes:",
    options: [
      {
        key: "A",
        text: "Double",
      },
      {
        key: "B",
        text: "Half",
      },
      {
        key: "C",
        text: "One-fourth",
      },
      {
        key: "D",
        text: "Four times",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "F ∝ 1/r², so doubling r reduces F to one-fourth.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-183",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Ohm's law",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T02",
    question:
      "A 12 V battery is connected across a 4 Ω resistor. What is the current?",
    options: [
      {
        key: "A",
        text: "0.33 A",
      },
      {
        key: "B",
        text: "3 A",
      },
      {
        key: "C",
        text: "8 A",
      },
      {
        key: "D",
        text: "48 A",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "I = V/R = 12/4 = 3 A.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-184",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question: "Which phenomenon supports the particle nature of light?",
    options: [
      {
        key: "A",
        text: "Interference",
      },
      {
        key: "B",
        text: "Diffraction",
      },
      {
        key: "C",
        text: "Photoelectric effect",
      },
      {
        key: "D",
        text: "Polarization",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The photoelectric effect is explained by light behaving as photons (quanta) of energy hf.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-175",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Projectile motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T14",
    question:
      "At the highest point of a projectile's trajectory, which statement is correct when air resistance is neglected?",
    options: [
      {
        key: "A",
        text: "Both velocity and acceleration are zero",
      },
      {
        key: "B",
        text: "Vertical velocity is zero and acceleration is downward",
      },
      {
        key: "C",
        text: "Horizontal velocity is zero",
      },
      {
        key: "D",
        text: "Acceleration is horizontal",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At the highest point, the vertical component of velocity is zero, but gravitational acceleration remains downward.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-176",
    class: 11,
    subject: "Physics",
    topic: "Dynamics",
    subtopic: "Applications of Newton's laws",
    topicId: "PHY11-CH04",
    subtopicId: "PHY11-CH04-T08",
    question:
      "A net force of 12 N acts on a 3 kg object. What is its acceleration?",
    options: [
      {
        key: "A",
        text: "2 m/s²",
      },
      {
        key: "B",
        text: "3 m/s²",
      },
      {
        key: "C",
        text: "4 m/s²",
      },
      {
        key: "D",
        text: "36 m/s²",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Using F = ma, a = 12/3 = 4 m/s².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-177",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Kinetic energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T05",
    question: "If the speed of an object doubles, its kinetic energy becomes:",
    options: [
      {
        key: "A",
        text: "Twice the original",
      },
      {
        key: "B",
        text: "Three times the original",
      },
      {
        key: "C",
        text: "Four times the original",
      },
      {
        key: "D",
        text: "Half the original",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Kinetic energy is proportional to the square of speed: K = ½mv².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-178",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Acceleration due to gravity",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T05",
    question:
      "Ignoring Earth's rotation, what happens to gravitational acceleration as altitude above Earth increases?",
    options: [
      {
        key: "A",
        text: "It increases",
      },
      {
        key: "B",
        text: "It decreases",
      },
      {
        key: "C",
        text: "It remains constant at all altitudes",
      },
      {
        key: "D",
        text: "It becomes infinite",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Gravitational acceleration varies as GM/(R+h)² and decreases as altitude h increases.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-179",
    class: 11,
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Young's modulus",
    topicId: "PHY11-CH08",
    subtopicId: "PHY11-CH08-T08",
    question: "Young's modulus is the ratio of:",
    options: [
      {
        key: "A",
        text: "Strain to stress",
      },
      {
        key: "B",
        text: "Stress to strain",
      },
      {
        key: "C",
        text: "Force to extension",
      },
      {
        key: "D",
        text: "Extension to original length",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Within the elastic limit, Young's modulus equals longitudinal stress divided by longitudinal strain.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-185",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Archimedes' principle",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T06",
    question: "The buoyant force on an immersed object equals the:",
    options: [
      {
        key: "A",
        text: "Mass of the object",
      },
      {
        key: "B",
        text: "Volume of the object",
      },
      {
        key: "C",
        text: "Weight of fluid displaced",
      },
      {
        key: "D",
        text: "Density of the object",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Archimedes' principle states that buoyant force equals the weight of the displaced fluid.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-180",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T11",
    question:
      "How much heat is needed to raise the temperature of 2 kg of a substance of specific heat capacity 500 J kg⁻¹ K⁻¹ by 3 K?",
    options: [
      {
        key: "A",
        text: "750 J",
      },
      {
        key: "B",
        text: "1500 J",
      },
      {
        key: "C",
        text: "3000 J",
      },
      {
        key: "D",
        text: "6000 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Q = mcΔT = 2 × 500 × 3 = 3000 J.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-181",
    class: 11,
    subject: "Physics",
    topic: "Refraction at Plane Surfaces",
    subtopic: "Refraction of light",
    topicId: "PHY11-CH15",
    subtopicId: "PHY11-CH15-T01",
    question:
      "When light passes from air into glass at an oblique angle, which quantity remains unchanged?",
    options: [
      {
        key: "A",
        text: "Speed",
      },
      {
        key: "B",
        text: "Wavelength",
      },
      {
        key: "C",
        text: "Frequency",
      },
      {
        key: "D",
        text: "Direction in every case",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Frequency is determined by the source and remains constant across a boundary, while speed and wavelength change.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-182",
    class: 11,
    subject: "Physics",
    topic: "Electric Charges",
    subtopic: "Coulomb's law",
    topicId: "PHY11-CH19",
    subtopicId: "PHY11-CH19-T09",
    question:
      "If the distance between two point charges is doubled, the electrostatic force magnitude becomes:",
    options: [
      {
        key: "A",
        text: "Four times",
      },
      {
        key: "B",
        text: "Twice",
      },
      {
        key: "C",
        text: "Half",
      },
      {
        key: "D",
        text: "One-quarter",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Coulomb's law gives F proportional to 1/r², so doubling r reduces the force to one-quarter.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-186",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Ohm's law",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T02",
    question:
      "A 12 Ω resistor is connected across a 6 V ideal battery. What current flows?",
    options: [
      {
        key: "A",
        text: "0.5 A",
      },
      {
        key: "B",
        text: "2 A",
      },
      {
        key: "C",
        text: "18 A",
      },
      {
        key: "D",
        text: "72 A",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation: "Ohm's law gives I = V/R = 6/12 = 0.5 A.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-187",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Magnetic force on a moving charge",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T04",
    question:
      "The magnetic force on a moving charged particle is zero when its velocity is:",
    options: [
      {
        key: "A",
        text: "Perpendicular to the magnetic field",
      },
      {
        key: "B",
        text: "At 45° to the magnetic field",
      },
      {
        key: "C",
        text: "Parallel to the magnetic field",
      },
      {
        key: "D",
        text: "At 60° to the magnetic field",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The magnitude is F = |q|vB sin θ. It is zero when θ = 0° or 180°.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-188",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Energy of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T03",
    question:
      "If the frequency of electromagnetic radiation doubles, the energy of each photon:",
    options: [
      {
        key: "A",
        text: "Halves",
      },
      {
        key: "B",
        text: "Doubles",
      },
      {
        key: "C",
        text: "Quadruples",
      },
      {
        key: "D",
        text: "Remains unchanged",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Photon energy is E = hf, so doubling frequency doubles photon energy.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-189",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular displacement, velocity and acceleration",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T01",
    question:
      "A wheel rotates at 120 revolutions per minute. What is its angular speed?",
    options: [
      {
        key: "A",
        text: "2π rad/s",
      },
      {
        key: "B",
        text: "4π rad/s",
      },
      {
        key: "C",
        text: "120π rad/s",
      },
      {
        key: "D",
        text: "240π rad/s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "120 rpm = 2 revolutions per second, so ω = 2 × 2π = 4π rad/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-190",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Faraday's laws of electromagnetic induction",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T02",
    question:
      "The magnitude of induced emf in a coil is proportional to the rate of change of:",
    options: [
      {
        key: "A",
        text: "Electrical resistance",
      },
      {
        key: "B",
        text: "Magnetic flux linkage",
      },
      {
        key: "C",
        text: "Coil mass",
      },
      {
        key: "D",
        text: "Wire length only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Faraday's law states that induced emf magnitude equals the rate of change of magnetic flux linkage.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-191",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Alternating current and voltage",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T01",
    question:
      "For a sinusoidal alternating voltage with peak value 100 V, the rms value is approximately:",
    options: [
      {
        key: "A",
        text: "50 V",
      },
      {
        key: "B",
        text: "70.7 V",
      },
      {
        key: "C",
        text: "100 V",
      },
      {
        key: "D",
        text: "141.4 V",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Vrms = Vpeak/√2 = 100/√2 ≈ 70.7 V.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-192",
    class: 12,
    subject: "Physics",
    topic: "Wave Motion",
    subtopic: "Mechanical and electromagnetic waves",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T02",
    question: "In a vacuum, electromagnetic waves are:",
    options: [
      {
        key: "A",
        text: "Longitudinal",
      },
      {
        key: "B",
        text: "Transverse",
      },
      {
        key: "C",
        text: "Unable to carry energy",
      },
      {
        key: "D",
        text: "Dependent on a material medium",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Electromagnetic waves are transverse and can propagate through a vacuum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-193",
    class: 12,
    subject: "Physics",
    topic: "Interference of Light",
    subtopic: "Young's double-slit experiment",
    topicId: "PHY12-CH11",
    subtopicId: "PHY12-CH11-T07",
    question:
      "In Young's double-slit experiment, fringe spacing increases when:",
    options: [
      {
        key: "A",
        text: "Slit separation increases",
      },
      {
        key: "B",
        text: "Wavelength decreases",
      },
      {
        key: "C",
        text: "Screen distance increases",
      },
      {
        key: "D",
        text: "Screen distance decreases",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Fringe spacing β = λD/d; it increases with screen distance D when other variables are fixed.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-194",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question:
      "For light above the threshold frequency, increasing its intensity while keeping frequency fixed generally increases the:",
    options: [
      {
        key: "A",
        text: "Maximum kinetic energy of emitted electrons",
      },
      {
        key: "B",
        text: "Work function of the metal",
      },
      {
        key: "C",
        text: "Number of emitted photoelectrons per unit time",
      },
      {
        key: "D",
        text: "Threshold frequency",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "At fixed frequency above threshold, greater intensity means more incident photons per unit time and generally more emitted electrons.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-195",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Energy of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T03",
    question: "An atom emits a photon when an electron transitions from:",
    options: [
      {
        key: "A",
        text: "A lower energy level to a higher level",
      },
      {
        key: "B",
        text: "A higher energy level to a lower level",
      },
      {
        key: "C",
        text: "Any level without an energy change",
      },
      {
        key: "D",
        text: "A bound state to the same bound state",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The energy difference is released as a photon when an electron moves to a lower energy level.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-196",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Half-life",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T06",
    question:
      "A radioactive sample has a half-life of 5 days. What fraction remains after 15 days?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/3",
      },
      {
        key: "C",
        text: "1/4",
      },
      {
        key: "D",
        text: "1/8",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Fifteen days is three half-lives, so the remaining fraction is (1/2)³ = 1/8.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-197",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Applications of semiconductor devices",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T18",
    question:
      "A conventional silicon p-n junction diode is forward biased when:",
    options: [
      {
        key: "A",
        text: "The p-side is connected to the negative terminal",
      },
      {
        key: "B",
        text: "The n-side is connected to the positive terminal",
      },
      {
        key: "C",
        text: "The p-side is connected to the positive terminal and the n-side to the negative terminal",
      },
      {
        key: "D",
        text: "Both sides are connected to the same terminal",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Forward bias connects the p-side to positive and the n-side to negative, reducing the depletion barrier.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-183",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Capacitance",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T01",
    question:
      "A capacitor stores charge 24 μC at a potential difference of 6 V. Its capacitance is:",
    options: [
      {
        key: "A",
        text: "0.25 μF",
      },
      {
        key: "B",
        text: "4 μF",
      },
      {
        key: "C",
        text: "18 μF",
      },
      {
        key: "D",
        text: "144 μF",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "C = Q/V = 24 μC/6 V = 4 μF.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-184",
    class: 11,
    subject: "Physics",
    topic: "Kinematics",
    subtopic: "Projectile motion",
    topicId: "PHY11-CH03",
    subtopicId: "PHY11-CH03-T14",
    question:
      "A projectile is launched with a speed of 20 m/s at an angle of 30° to the horizontal. Taking g = 10 m/s², what is its time of flight?",
    options: [
      {
        key: "A",
        text: "1 s",
      },
      {
        key: "B",
        text: "2 s",
      },
      {
        key: "C",
        text: "3 s",
      },
      {
        key: "D",
        text: "4 s",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Time of flight T = 2u sin θ/g = 2 × 20 × 0.5/10 = 2 s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-185",
    class: 11,
    subject: "Physics",
    topic: "Work, Energy and Power",
    subtopic: "Kinetic energy",
    topicId: "PHY11-CH05",
    subtopicId: "PHY11-CH05-T05",
    question: "What is the kinetic energy of a 4 kg object moving at 5 m/s?",
    options: [
      {
        key: "A",
        text: "20 J",
      },
      {
        key: "B",
        text: "40 J",
      },
      {
        key: "C",
        text: "50 J",
      },
      {
        key: "D",
        text: "100 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Kinetic energy = ½mv² = ½ × 4 × 25 = 50 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-186",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Acceleration due to gravity",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T05",
    question:
      "If Earth's radius remains unchanged but its mass doubles, what happens to the acceleration due to gravity at its surface?",
    options: [
      {
        key: "A",
        text: "It becomes half",
      },
      {
        key: "B",
        text: "It remains unchanged",
      },
      {
        key: "C",
        text: "It doubles",
      },
      {
        key: "D",
        text: "It becomes four times",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Since g = GM/R², doubling M while keeping R constant doubles g.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-187",
    class: 11,
    subject: "Physics",
    topic: "Quantity of Heat",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH11",
    subtopicId: "PHY11-CH11-T02",
    question:
      "How much heat is needed to raise the temperature of 2 kg of a substance with specific heat capacity 500 J/(kg K) by 10 K?",
    options: [
      {
        key: "A",
        text: "1,000 J",
      },
      {
        key: "B",
        text: "5,000 J",
      },
      {
        key: "C",
        text: "10,000 J",
      },
      {
        key: "D",
        text: "20,000 J",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Q = mcΔT = 2 × 500 × 10 = 10,000 J.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-198",
    class: 12,
    subject: "Physics",
    topic: "Acoustic Phenomena",
    subtopic: "Doppler effect",
    topicId: "PHY12-CH09",
    subtopicId: "PHY12-CH09-T08",
    question:
      "A sound source moves toward a stationary observer. Assuming the emitted frequency is unchanged, the observer hears a frequency that is:",
    options: [
      {
        key: "A",
        text: "Lower than the emitted frequency",
      },
      {
        key: "B",
        text: "Higher than the emitted frequency",
      },
      {
        key: "C",
        text: "Always zero",
      },
      {
        key: "D",
        text: "Unchanged in every case",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "As the source approaches, wavefronts become closer together, increasing the frequency observed.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-188",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Combination of capacitors in parallel",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T08",
    question:
      "Two capacitors of 3 μF and 6 μF are connected in parallel. What is their equivalent capacitance?",
    options: [
      {
        key: "A",
        text: "2 μF",
      },
      {
        key: "B",
        text: "3 μF",
      },
      {
        key: "C",
        text: "9 μF",
      },
      {
        key: "D",
        text: "18 μF",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Capacitances in parallel add directly: C = 3 + 6 = 9 μF.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-199",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Motion of charged particles in magnetic fields",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T06",
    question:
      "A charged particle enters a uniform magnetic field perpendicular to the field. If its momentum doubles while its charge and the field remain constant, its circular path radius:",
    options: [
      {
        key: "A",
        text: "Halves",
      },
      {
        key: "B",
        text: "Remains unchanged",
      },
      {
        key: "C",
        text: "Doubles",
      },
      {
        key: "D",
        text: "Becomes four times",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The radius is r = p/(|q|B), so doubling momentum doubles the radius.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-200",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Basic logic gates",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T17",
    question:
      "For a two-input AND gate, what is the output when the inputs are 1 and 0?",
    options: [
      {
        key: "A",
        text: "0",
      },
      {
        key: "B",
        text: "1",
      },
      {
        key: "C",
        text: "2",
      },
      {
        key: "D",
        text: "Undefined",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An AND gate outputs 1 only when all inputs are 1. With inputs 1 and 0, the output is 0.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-189",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Newton's law of universal gravitation",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T01",
    question:
      "If the distance between two masses is doubled, the gravitational force becomes:",
    options: [
      {
        key: "A",
        text: "Twice the original force",
      },
      {
        key: "B",
        text: "Half the original force",
      },
      {
        key: "C",
        text: "One-fourth the original force",
      },
      {
        key: "D",
        text: "Four times the original force",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Gravitational force varies inversely with the square of distance, so doubling the distance reduces the force to one-fourth.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-190",
    class: 11,
    subject: "Physics",
    topic: "Gravitation",
    subtopic: "Acceleration due to gravity",
    topicId: "PHY11-CH07",
    subtopicId: "PHY11-CH07-T05",
    question:
      "The approximate value of acceleration due to gravity at Earth's surface is:",
    options: [
      {
        key: "A",
        text: "4.9 m/s²",
      },
      {
        key: "B",
        text: "9.8 m/s²",
      },
      {
        key: "C",
        text: "19.6 m/s²",
      },
      {
        key: "D",
        text: "98 m/s²",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The average acceleration due to gravity at Earth's surface is approximately 9.8 m/s².",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-201",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Surface tension",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T08",
    question: "The SI unit of surface tension is:",
    options: [
      {
        key: "A",
        text: "N/m",
      },
      {
        key: "B",
        text: "N/m²",
      },
      {
        key: "C",
        text: "J/m³",
      },
      {
        key: "D",
        text: "kg/m³",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Surface tension is force per unit length, so its SI unit is newton per metre.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-191",
    class: 11,
    subject: "Physics",
    topic: "Heat and Temperature",
    subtopic: "Specific heat capacity",
    topicId: "PHY11-CH09",
    subtopicId: "PHY11-CH09-T11",
    question: "The SI unit of specific heat capacity is:",
    options: [
      {
        key: "A",
        text: "J kg⁻¹ K⁻¹",
      },
      {
        key: "B",
        text: "J kg K",
      },
      {
        key: "C",
        text: "W m⁻¹ K⁻¹",
      },
      {
        key: "D",
        text: "J K⁻¹",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Specific heat capacity is the heat required per unit mass per unit temperature rise.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-192",
    class: 11,
    subject: "Physics",
    topic: "Ideal Gas",
    subtopic: "Internal energy of an ideal gas",
    topicId: "PHY11-CH13",
    subtopicId: "PHY11-CH13-T16",
    question:
      "For a fixed amount of an ideal gas at constant temperature, pressure is inversely proportional to:",
    options: [
      {
        key: "A",
        text: "Absolute temperature",
      },
      {
        key: "B",
        text: "Volume",
      },
      {
        key: "C",
        text: "Density squared",
      },
      {
        key: "D",
        text: "Molecular mass",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Boyle's law states that pressure is inversely proportional to volume at constant temperature for a fixed amount of gas.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-202",
    class: 12,
    subject: "Physics",
    topic: "Wave Motion",
    subtopic: "Wave speed",
    topicId: "PHY12-CH06",
    subtopicId: "PHY12-CH06-T08",
    question: "A wave has frequency 50 Hz and wavelength 4 m. Its speed is:",
    options: [
      {
        key: "A",
        text: "12.5 m/s",
      },
      {
        key: "B",
        text: "46 m/s",
      },
      {
        key: "C",
        text: "200 m/s",
      },
      {
        key: "D",
        text: "400 m/s",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Wave speed v = fλ = 50 × 4 = 200 m/s.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-203",
    class: 12,
    subject: "Physics",
    topic: "Mechanical Waves",
    subtopic: "Interference of sound waves",
    topicId: "PHY12-CH07",
    subtopicId: "PHY12-CH07-T11",
    question: "The pitch of a sound primarily depends on its:",
    options: [
      {
        key: "A",
        text: "Amplitude",
      },
      {
        key: "B",
        text: "Frequency",
      },
      {
        key: "C",
        text: "Speed",
      },
      {
        key: "D",
        text: "Intensity alone",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Higher frequency is perceived as higher pitch, while amplitude is associated with loudness.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-204",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular displacement, velocity and acceleration",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T01",
    question:
      "One complete revolution corresponds to an angular displacement of:",
    options: [
      {
        key: "A",
        text: "π/2 rad",
      },
      {
        key: "B",
        text: "π rad",
      },
      {
        key: "C",
        text: "2π rad",
      },
      {
        key: "D",
        text: "4π rad",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A complete revolution is 360°, equivalent to 2π radians.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-205",
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "A force of 10 N acts perpendicular to a lever arm of 0.5 m. The torque magnitude is:",
    options: [
      {
        key: "A",
        text: "2 N m",
      },
      {
        key: "B",
        text: "5 N m",
      },
      {
        key: "C",
        text: "10 N m",
      },
      {
        key: "D",
        text: "20 N m",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Torque = force × perpendicular distance = 10 × 0.5 = 5 N m.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-206",
    class: 12,
    subject: "Physics",
    topic: "Periodic Motion",
    subtopic: "Spring-mass system",
    topicId: "PHY12-CH02",
    subtopicId: "PHY12-CH02-T09",
    question: "The time period of an ideal spring-mass oscillator is:",
    options: [
      {
        key: "A",
        text: "2π√(m/k)",
      },
      {
        key: "B",
        text: "2π√(k/m)",
      },
      {
        key: "C",
        text: "√(mk)",
      },
      {
        key: "D",
        text: "2πmk",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "For a mass m attached to a spring of force constant k, T = 2π√(m/k).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-207",
    class: 12,
    subject: "Physics",
    topic: "Fluid Mechanics",
    subtopic: "Pressure variation with depth",
    topicId: "PHY12-CH03",
    subtopicId: "PHY12-CH03-T03",
    question: "Gauge pressure at depth h in a liquid of density ρ is:",
    options: [
      {
        key: "A",
        text: "ρg/h",
      },
      {
        key: "B",
        text: "ρgh",
      },
      {
        key: "C",
        text: "gh/ρ",
      },
      {
        key: "D",
        text: "ρh/g",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation: "Hydrostatic gauge pressure is given by P = ρgh.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-193",
    class: 11,
    subject: "Physics",
    topic: "Electric Field",
    subtopic: "Electric field",
    topicId: "PHY11-CH20",
    subtopicId: "PHY11-CH20-T01",
    question: "The SI unit of electric field strength is:",
    options: [
      {
        key: "A",
        text: "Coulomb",
      },
      {
        key: "B",
        text: "Newton per coulomb",
      },
      {
        key: "C",
        text: "Joule per second",
      },
      {
        key: "D",
        text: "Ohm metre",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Electric field is force per unit positive test charge, so its SI unit is N/C.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-194",
    class: 11,
    subject: "Physics",
    topic: "Capacitor",
    subtopic: "Capacitance",
    topicId: "PHY11-CH22",
    subtopicId: "PHY11-CH22-T01",
    question: "The capacitance of a capacitor is defined as:",
    options: [
      {
        key: "A",
        text: "Q/V",
      },
      {
        key: "B",
        text: "V/Q",
      },
      {
        key: "C",
        text: "QV",
      },
      {
        key: "D",
        text: "Q²V",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Capacitance C is the ratio of charge Q to potential difference V.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-208",
    class: 12,
    subject: "Physics",
    topic: "Electrical Circuits",
    subtopic: "Ohm's law",
    topicId: "PHY12-CH14",
    subtopicId: "PHY12-CH14-T02",
    question:
      "A resistor of 8 Ω carries a current of 2 A. The potential difference across it is:",
    options: [
      {
        key: "A",
        text: "4 V",
      },
      {
        key: "B",
        text: "8 V",
      },
      {
        key: "C",
        text: "16 V",
      },
      {
        key: "D",
        text: "32 V",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Using V = IR, the potential difference is 2 × 8 = 16 V.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-195",
    class: 11,
    subject: "Physics",
    topic: "DC Circuits",
    subtopic: "Electrical power",
    topicId: "PHY11-CH23",
    subtopicId: "PHY11-CH23-T13",
    question:
      "A device operates at 12 V and draws 3 A. Its electrical power is:",
    options: [
      {
        key: "A",
        text: "4 W",
      },
      {
        key: "B",
        text: "15 W",
      },
      {
        key: "C",
        text: "36 W",
      },
      {
        key: "D",
        text: "144 W",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "Electrical power P = VI = 12 × 3 = 36 W.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-209",
    class: 12,
    subject: "Physics",
    topic: "Magnetic Fields",
    subtopic: "Magnetic force on a moving charge",
    topicId: "PHY12-CH16",
    subtopicId: "PHY12-CH16-T04",
    question:
      "The magnetic force on a moving charge is maximum when its velocity is:",
    options: [
      {
        key: "A",
        text: "Parallel to the magnetic field",
      },
      {
        key: "B",
        text: "Antiparallel to the magnetic field",
      },
      {
        key: "C",
        text: "Perpendicular to the magnetic field",
      },
      {
        key: "D",
        text: "Zero",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "The magnetic force magnitude is F = |q|vB sin θ, which is maximum at θ = 90°.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-210",
    class: 12,
    subject: "Physics",
    topic: "Electromagnetic Induction",
    subtopic: "Faraday's laws of electromagnetic induction",
    topicId: "PHY12-CH18",
    subtopicId: "PHY12-CH18-T02",
    question:
      "The magnitude of induced electromotive force is proportional to the rate of change of:",
    options: [
      {
        key: "A",
        text: "Electric resistance",
      },
      {
        key: "B",
        text: "Magnetic flux",
      },
      {
        key: "C",
        text: "Charge density only",
      },
      {
        key: "D",
        text: "Wire length only",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Faraday's law states that induced EMF is proportional to the rate of change of magnetic flux linkage.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-211",
    class: 12,
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Mean value of alternating current",
    topicId: "PHY12-CH19",
    subtopicId: "PHY12-CH19-T04",
    question:
      "For a sinusoidal alternating voltage with peak value V₀, its RMS value is:",
    options: [
      {
        key: "A",
        text: "V₀",
      },
      {
        key: "B",
        text: "V₀/2",
      },
      {
        key: "C",
        text: "V₀/√2",
      },
      {
        key: "D",
        text: "√2V₀",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "For a sinusoidal waveform, the RMS voltage equals its peak value divided by √2.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY11-196",
    class: 11,
    subject: "Physics",
    topic: "Lenses",
    subtopic: "Lens formula",
    topicId: "PHY11-CH17",
    subtopicId: "PHY11-CH17-T08",
    question: "The power of a converging lens of focal length 0.5 m is:",
    options: [
      {
        key: "A",
        text: "−2 D",
      },
      {
        key: "B",
        text: "−0.5 D",
      },
      {
        key: "C",
        text: "0.5 D",
      },
      {
        key: "D",
        text: "+2 D",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "Lens power P = 1/f when f is in metres. Thus P = 1/0.5 = +2 dioptres for a converging lens.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-212",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Photoelectric effect",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T05",
    question:
      "In the photoelectric effect, increasing light intensity above the threshold frequency primarily increases the:",
    options: [
      {
        key: "A",
        text: "Maximum kinetic energy of each photoelectron",
      },
      {
        key: "B",
        text: "Number of emitted photoelectrons per unit time",
      },
      {
        key: "C",
        text: "Work function of the metal",
      },
      {
        key: "D",
        text: "Threshold frequency of the metal",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "At fixed frequency above threshold, greater intensity supplies more photons per unit time and can increase the photoelectric current.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-213",
    class: 12,
    subject: "Physics",
    topic: "Photons",
    subtopic: "Energy of a photon",
    topicId: "PHY12-CH21",
    subtopicId: "PHY12-CH21-T03",
    question: "The energy of a photon is given by:",
    options: [
      {
        key: "A",
        text: "E = h/f",
      },
      {
        key: "B",
        text: "E = hf",
      },
      {
        key: "C",
        text: "E = f/h",
      },
      {
        key: "D",
        text: "E = hc f",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Planck's relation gives photon energy as E = hf, where h is Planck's constant and f is frequency.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-214",
    class: 12,
    subject: "Physics",
    topic: "Radioactivity and Nuclear Reaction",
    subtopic: "Half-life",
    topicId: "PHY12-CH24",
    subtopicId: "PHY12-CH24-T06",
    question:
      "A radioactive sample has a half-life of 10 days. What fraction remains after 30 days?",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "1/3",
      },
      {
        key: "C",
        text: "1/8",
      },
      {
        key: "D",
        text: "1/16",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Thirty days represents three half-lives, so the remaining fraction is (1/2)³ = 1/8.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-215",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Doping",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T05",
    question:
      "Adding a suitable pentavalent impurity to pure silicon generally produces:",
    options: [
      {
        key: "A",
        text: "A p-type semiconductor",
      },
      {
        key: "B",
        text: "An n-type semiconductor",
      },
      {
        key: "C",
        text: "An insulator with no charge carriers",
      },
      {
        key: "D",
        text: "A superconductor",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Pentavalent donor impurities provide extra electrons, producing an n-type semiconductor.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-216",
    class: 12,
    subject: "Physics",
    topic: "Waves in Pipes and Strings",
    subtopic: "Formation of stationary waves",
    topicId: "PHY12-CH08",
    subtopicId: "PHY12-CH08-T02",
    question: "Electromagnetic waves can travel through:",
    options: [
      {
        key: "A",
        text: "Only solids",
      },
      {
        key: "B",
        text: "Only liquids",
      },
      {
        key: "C",
        text: "A vacuum",
      },
      {
        key: "D",
        text: "Only ionized gases",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Electromagnetic waves do not require a material medium and can propagate through a vacuum.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    id: "PHY12-217",
    class: 12,
    subject: "Physics",
    topic: "Semiconductor Devices",
    subtopic: "Basic logic gates",
    topicId: "PHY12-CH22",
    subtopicId: "PHY12-CH22-T17",
    question: "For an AND gate, the output is 1 when:",
    options: [
      {
        key: "A",
        text: "Both inputs are 0",
      },
      {
        key: "B",
        text: "At least one input is 1",
      },
      {
        key: "C",
        text: "Both inputs are 1",
      },
      {
        key: "D",
        text: "The inputs are different",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation: "A two-input AND gate outputs 1 only when both inputs are 1.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Physical quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T01",
    question: "Which of the following is an example of a scalar quantity?",
    options: [
      {
        key: "A",
        text: "Speed",
      },
      {
        key: "B",
        text: "Velocity",
      },
      {
        key: "C",
        text: "Acceleration",
      },
      {
        key: "D",
        text: "Displacement",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "A scalar quantity has only magnitude and no direction. Speed, being the rate of distance covered, is a scalar, whereas velocity, acceleration, and displacement are vector quantities as they include direction.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-197",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Fundamental and derived quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T02",
    question: "Which of the following is a derived quantity?",
    options: [
      {
        key: "A",
        text: "Length",
      },
      {
        key: "B",
        text: "Mass",
      },
      {
        key: "C",
        text: "Area",
      },
      {
        key: "D",
        text: "Time",
      },
    ],
    correct_options: ["C"],
    is_multi_select: false,
    explanation:
      "Area is a derived quantity calculated as length squared (L^2). Length, mass, and time are fundamental quantities that cannot be derived from other units.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-198",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Systems of units",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T04",
    question: "Which of the following is NOT a system of units?",
    options: [
      {
        key: "A",
        text: "CGS",
      },
      {
        key: "B",
        text: "FPS",
      },
      {
        key: "C",
        text: "MKS",
      },
      {
        key: "D",
        text: "KMS",
      },
    ],
    correct_options: ["D"],
    is_multi_select: false,
    explanation:
      "KMS is not a recognized system of units. The CGS (Centimeter-Gram-Second), FPS (Foot-Pound-Second), and MKS (Meter-Kilogram-Second) are standard systems used for measurement.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-199",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensions of physical quantities",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T05",
    question: "What are the dimensions of velocity?",
    options: [
      {
        key: "A",
        text: "[M^0 L^1 T^-1]",
      },
      {
        key: "B",
        text: "[M^1 L^1 T^0]",
      },
      {
        key: "C",
        text: "[M^1 L^0 T^-2]",
      },
      {
        key: "D",
        text: "[M^0 L^2 T^-1]",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Velocity is defined as distance per unit time. Its dimensions are expressed as [M^0 L^1 T^-1], indicating that it has no mass component, one length component, and an inverse time component.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-200",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensional formulae",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T06",
    question: "What is the dimensional formula for energy?",
    options: [
      {
        key: "A",
        text: "[M^1 L^2 T^-2]",
      },
      {
        key: "B",
        text: "[M^1 L^1 T^2]",
      },
      {
        key: "C",
        text: "[M^0 L^2 T^-2]",
      },
      {
        key: "D",
        text: "[M^2 L^1 T^-2]",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Energy is defined as the capacity to do work. The work done is given by force times distance, which has dimensions of [M^1 L^2 T^-2]. Therefore, the dimensional formula for energy is also [M^1 L^2 T^-2].",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-201",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Dimensional analysis",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T07",
    question:
      "Which of the following statements is true regarding dimensional analysis?",
    options: [
      {
        key: "A",
        text: "It can be used to derive relationships between physical quantities.",
      },
      {
        key: "B",
        text: "It cannot check the correctness of equations.",
      },
      {
        key: "C",
        text: "It is applicable only to scalar quantities.",
      },
      {
        key: "D",
        text: "It can only be used in theoretical physics.",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Dimensional analysis allows us to derive relationships between physical quantities and check the dimensional consistency of equations, making it a powerful tool in both theoretical and experimental physics.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-202",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Applications of dimensional analysis",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T08",
    question:
      "Using dimensional analysis, which of the following can be used to express the gravitational force?",
    options: [
      {
        key: "A",
        text: "F = m * g",
      },
      {
        key: "B",
        text: "F = G * (m1 * m2) / r^2",
      },
      {
        key: "C",
        text: "F = m * a",
      },
      {
        key: "D",
        text: "F = p * v",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "The equation F = G * (m1 * m2) / r^2 expresses the gravitational force between two masses, where G is the gravitational constant. Dimensional analysis confirms that both sides of the equation have consistent dimensions of force.",
    difficulty: "Hard",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-203",
  },
  {
    class: 11,
    subject: "Physics",
    topic: "Physical Quantities",
    subtopic: "Significant figures",
    topicId: "PHY11-CH01",
    subtopicId: "PHY11-CH01-T09",
    question: "How many significant figures are in the number 0.00456?",
    options: [
      {
        key: "A",
        text: "2",
      },
      {
        key: "B",
        text: "3",
      },
      {
        key: "C",
        text: "4",
      },
      {
        key: "D",
        text: "5",
      },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "In the number 0.00456, the leading zeros are not significant. Therefore, there are three significant figures: 4, 5, and 6.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 11 CDC Curriculum aligned.",
    id: "PHY11-204",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Angular displacement, velocity and acceleration",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T01",
    question:
      "An object rotates with a constant angular acceleration of 2 rad/s². If its initial angular velocity is 3 rad/s, what will be its angular velocity after 4 seconds?",
    options: [
      {
        key: "A",
        text: "11 rad/s",
      },
      {
        key: "B",
        text: "8 rad/s",
      },
      {
        key: "C",
        text: "5 rad/s",
      },
      {
        key: "D",
        text: "6 rad/s",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Using the equation of angular motion, ω = ω₀ + αt, where ω₀ = 3 rad/s, α = 2 rad/s², and t = 4 s. Substituting gives ω = 3 + (2 * 4) = 11 rad/s.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-218",
  },
  {
    class: 12,
    subject: "Physics",
    topic: "Rotational Dynamics",
    subtopic: "Torque",
    topicId: "PHY12-CH01",
    subtopicId: "PHY12-CH01-T02",
    question:
      "A torque of 50 Nm is applied to a wheel with a moment of inertia of 5 kg·m². What is the angular acceleration of the wheel?",
    options: [
      {
        key: "A",
        text: "10 rad/s²",
      },
      {
        key: "B",
        text: "5 rad/s²",
      },
      {
        key: "C",
        text: "2 rad/s²",
      },
      {
        key: "D",
        text: "25 rad/s²",
      },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "Using the formula τ = Iα, where τ is torque, I is moment of inertia, and α is angular acceleration. Rearranging gives α = τ/I = 50 Nm / 5 kg·m² = 10 rad/s².",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "Official Nepal NEB Grade 12 CDC Curriculum aligned.",
    id: "PHY12-219",
  },
];
