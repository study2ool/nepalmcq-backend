import type { Question } from "../../types/quiz.types.js";

export const economicsQuestions: Question[] = [
  {
    id: "ECO11-001",
    class: 11,
    subject: "Economics",
    topic: "Basic Concepts of Economics",
    subtopic: "Scarcity and Choice",
    topicId: "ECO11-CH01",
    subtopicId: "ECO11-CH01-T02",
    question:
      "Lionel Robbins defined economics as the science which studies human behavior as a relationship between ends and scarce means with:",
    options: [
      { key: "A", text: "Single uses only" },
      { key: "B", text: "Alternative uses" },
      { key: "C", text: "Unlimited quantities" },
      { key: "D", text: "Zero opportunity cost" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Robbins' scarcity definition focuses on unlimited wants and scarce resources that possess alternative applications.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 11 Economics Chapter 1",
  },
  {
    id: "ECO11-002",
    class: 11,
    subject: "Economics",
    topic: "Theory of Consumer Behavior",
    subtopic: "Indifference Curve",
    topicId: "ECO11-CH04",
    subtopicId: "ECO11-CH04-T03",
    question:
      "An indifference curve is convex to the origin due to the operation of:",
    options: [
      { key: "A", text: "Diminishing Marginal Rate of Substitution (MRS)" },
      { key: "B", text: "Increasing Marginal Utility" },
      { key: "C", text: "Law of Supply" },
      { key: "D", text: "Constant Returns to Scale" },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "An indifference curve exhibits convex curvature to the origin because the Marginal Rate of Substitution diminishes as consumption of good X increases.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 11 Consumer Theory",
  },
  {
    id: "ECO12-001",
    class: 12,
    subject: "Economics",
    topic: "National Income Accounting",
    subtopic: "GNP vs GDP",
    topicId: "ECO12-CH02",
    subtopicId: "ECO12-CH02-T01",
    question:
      "Gross National Product (GNP) equals Gross Domestic Product (GDP) plus:",
    options: [
      { key: "A", text: "Net Factor Income from Abroad (NFIA)" },
      { key: "B", text: "Depreciation" },
      { key: "C", text: "Direct corporate taxes" },
      { key: "D", text: "Import tariffs" },
    ],
    correct_options: ["A"],
    is_multi_select: false,
    explanation:
      "GNP = GDP + NFIA (Factor income received from abroad minus factor income paid abroad).",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 12 National Income",
  },
  {
    id: "ECO12-002",
    class: 12,
    subject: "Economics",
    topic: "Money and Banking",
    subtopic: "Central Bank Functions",
    topicId: "ECO12-CH03",
    subtopicId: "ECO12-CH03-T04",
    question:
      "In Nepal, which institution holds the sole monopoly power to issue paper banknotes?",
    options: [
      { key: "A", text: "Ministry of Finance" },
      { key: "B", text: "Nepal Rastra Bank" },
      { key: "C", text: "Rastriya Banijya Bank" },
      { key: "D", text: "Securities Board of Nepal (SEBON)" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Nepal Rastra Bank is the nation's central bank and solely empowered to issue paper currency notes under the Nepal Rastra Bank Act.",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 12 Money and Banking",
  },
];
