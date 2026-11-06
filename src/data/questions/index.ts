import type { Question } from "../../types/quiz.types.js";
import { physicsQuestions } from "./physics.questions.js";
import { chemistryQuestions } from "./chemistry.questions.js";
import { biologyQuestions } from "./biology.questions.js";
import { mathematicsQuestions } from "./mathematics.questions.js";
import { computer_scienceQuestions } from "./computer_science.questions.js";
import { englishQuestions } from "./english.questions.js";
import { nepaliQuestions } from "./nepali.questions.js";
import { accountingQuestions } from "./accounting.questions.js";
import { economicsQuestions } from "./economics.questions.js";
import { business_studiesQuestions } from "./business_studies.questions.js";
import { hotel_managementQuestions } from "./hotel_management.questions.js";
import { business_mathQuestions } from "./business_math.questions.js";

export const questionsBySubject: Record<string, Question[]> = {
  Physics: physicsQuestions,
  Chemistry: chemistryQuestions,
  Biology: biologyQuestions,
  Mathematics: mathematicsQuestions,
  "Computer Science": computer_scienceQuestions,
  English: englishQuestions,
  Nepali: nepaliQuestions,
  Accounting: accountingQuestions,
  Economics: economicsQuestions,
  "Business Studies": business_studiesQuestions,
  "Hotel Management": hotel_managementQuestions,
  "Business Math": business_mathQuestions,
};

export const allQuestions: Question[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions,
  ...mathematicsQuestions,
  ...computer_scienceQuestions,
  ...englishQuestions,
  ...nepaliQuestions,
  ...accountingQuestions,
  ...economicsQuestions,
  ...business_studiesQuestions,
  ...hotel_managementQuestions,
  ...business_mathQuestions,
];
