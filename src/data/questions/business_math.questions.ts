import type { Question } from "../../types/quiz.types.js";

export const business_mathQuestions: Question[] = [
  {
    id: "BM11-001",
    class: 11,
    subject: "Business Math",
    topic: "Financial Mathematics",
    subtopic: "Compound Interest",
    topicId: "BM11-CH02",
    subtopicId: "BM11-CH02-T01",
    question:
      "When interest is compounded semi-annually at nominal annual rate R%, the compounding multiplier per conversion period is:",
    options: [
      { key: "A", text: "1 + R/100" },
      { key: "B", text: "1 + R/200" },
      { key: "C", text: "1 + R/400" },
      { key: "D", text: "1 + 2R/100" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "For semi-annual compounding, the annual rate is divided by 2, yielding (1 + R/200).",
    difficulty: "Easy",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 11 Financial Mathematics",
  },
  {
    id: "BM12-001",
    class: 12,
    subject: "Business Math",
    topic: "Differential Calculus in Business",
    subtopic: "Marginal Cost",
    topicId: "BM12-CH01",
    subtopicId: "BM12-CH01-T01",
    question:
      "If total cost C(x) = 100 + 5x + 0.05x^2, the marginal cost (MC) at production level x = 20 units is:",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "7" },
      { key: "C", text: "9" },
      { key: "D", text: "10" },
    ],
    correct_options: ["B"],
    is_multi_select: false,
    explanation:
      "Marginal cost is dC/dx = 5 + 0.1x. At x = 20, MC = 5 + 0.1(20) = 7.",
    difficulty: "Medium",
    question_type: "MCQ",
    marks: 1,
    curriculum_note: "NEB Grade 12 Business Calculus",
  },
];
