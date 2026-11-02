import type { Question } from "../types/quiz.types.js";

/**
 * Normalizes question text for robust deduplication across English and Nepali (Devanagari).
 * Strips whitespace, case, and all unicode punctuation/symbols.
 */
export function normalizeQuestionText(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, "")
    .trim();
}

/**
 * Generates next sequential question ID formatted like PHY11-001, avoiding all known IDs.
 */
export function getNextId(
  prefix: string,
  classLevel: 11 | 12,
  existingQuestions: Question[],
  allUsedIds: Set<string>,
): string {
  const regex = new RegExp(`^${prefix}${classLevel}-(\\d+)$`);
  let maxNum = 0;

  for (const q of existingQuestions) {
    const match = q.id.match(regex);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) maxNum = num;
    }
  }

  for (const id of allUsedIds) {
    const match = id.match(regex);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) maxNum = num;
    }
  }

  let nextNum = maxNum + 1;
  while (
    allUsedIds.has(`${prefix}${classLevel}-${String(nextNum).padStart(3, "0")}`)
  ) {
    nextNum++;
  }

  const nextId = `${prefix}${classLevel}-${String(nextNum).padStart(3, "0")}`;
  allUsedIds.add(nextId);
  return nextId;
}
