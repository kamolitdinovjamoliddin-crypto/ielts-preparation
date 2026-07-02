import { Question, WordLimit } from "./types";

function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:'"]/g, "")
    .replace(/\s+/g, " ");
}

function getMaxWords(limit: WordLimit): number {
  if (limit === "ONE WORD ONLY") return 1;
  if (limit === "NO MORE THAN TWO WORDS") return 2;
  return 3; // NO MORE THAN THREE WORDS
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function exceedsWordLimit(answer: string, wordLimit?: WordLimit): boolean {
  if (!wordLimit || !answer.trim()) return false;
  return countWords(answer) > getMaxWords(wordLimit);
}

export function isAnswerCorrect(question: Question, userAnswer: string): boolean {
  if (!userAnswer) return false;

  // Real IELTS qoidasi: agar javob so'z limitidan oshsa, avtomatik noto'g'ri hisoblanadi
  if (exceedsWordLimit(userAnswer, question.wordLimit)) return false;

  const normalizedUser = normalize(userAnswer);

  if (Array.isArray(question.correctAnswer)) {
    return question.correctAnswer.some((ans) => normalize(ans) === normalizedUser);
  }

  return normalize(question.correctAnswer) === normalizedUser;
}

export function scoreQuestions(
  questions: Question[],
  answers: Record<string, string>
): { correct: number; total: number; results: Record<string, boolean> } {
  let correct = 0;
  const results: Record<string, boolean> = {};

  for (const q of questions) {
    const userAnswer = answers[q.id] || "";
    const isCorrect = isAnswerCorrect(q, userAnswer);
    results[q.id] = isCorrect;
    if (isCorrect) correct++;
  }

  return { correct, total: questions.length, results };
}
