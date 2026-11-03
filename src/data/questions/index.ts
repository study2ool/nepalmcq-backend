import type { Question } from "../../types/quiz.types.js";
import { physicsQuestions } from "./physics.questions.js";
import { chemistryQuestions } from "./chemistry.questions.js";
import { biologyQuestions } from "./biology.questions.js";
import { mathematicsQuestions } from "./mathematics.questions.js";
import { computer_scienceQuestions } from "./computer_science.questions.js";
import { englishQuestions } from "./english.questions.js";
import { nepaliQuestions } from "./nepali.questions.js";

export const questionsBySubject: Record<string, Question[]> = {
  Physics: physicsQuestions,
  Chemistry: chemistryQuestions,
  Biology: biologyQuestions,
  Mathematics: mathematicsQuestions,
  "Computer Science": computer_scienceQuestions,
  English: englishQuestions,
  Nepali: nepaliQuestions,
};

export const allQuestions: Question[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions,
  ...mathematicsQuestions,
  ...computer_scienceQuestions,
  ...englishQuestions,
  ...nepaliQuestions,
];
