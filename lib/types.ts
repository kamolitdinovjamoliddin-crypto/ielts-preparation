// Umumiy IELTS test tiplari

export type ModuleType = "listening" | "reading" | "writing" | "speaking";

export type QuestionType =
  | "multiple-choice"
  | "fill-blank"
  | "matching"
  | "true-false-not-given"
  | "short-answer";

export type WordLimit = "ONE WORD ONLY" | "NO MORE THAN TWO WORDS" | "NO MORE THAN THREE WORDS";

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[]; // multiple-choice yoki matching uchun
  correctAnswer: string | string[]; // ba'zan bir nechta to'g'ri variant bo'lishi mumkun
  points?: number;
  wordLimit?: WordLimit; // faqat fill-blank / short-answer uchun - real IELTS so'z limiti
}

export interface ReadingPassage {
  id: string;
  title: string;
  paragraphs: string[];
  questions: Question[];
}

export interface ReadingTest {
  id: string;
  title: string;
  passages: ReadingPassage[]; // odatda 3 ta passage
  durationMinutes: number; // odatda 60
}

export interface ListeningSection {
  id: string;
  title: string;
  transcript: string; // demo bosqichida audio o'rniga transcript ko'rsatiladi / TTS uchun manba bo'ladi
  audioUrl?: string; // kelajakda haqiqiy audio fayl uchun
  questions: Question[];
}

export interface ListeningTest {
  id: string;
  title: string;
  sections: ListeningSection[]; // odatda 4 ta section
  durationMinutes: number; // odatda 30
}

export interface WritingTask {
  id: string;
  taskNumber: 1 | 2;
  prompt: string;
  imageDescription?: string; // Task 1 uchun grafik/diagram tavsifi (matn shaklida)
  minWords: number; // Task1: 150, Task2: 250
  durationMinutes: number; // Task1: 20, Task2: 40
}

export interface WritingTest {
  id: string;
  title: string;
  tasks: WritingTask[];
}

export interface SpeakingPart {
  id: string;
  partNumber: 1 | 2 | 3;
  title: string;
  prompt: string;
  cueCard?: {
    topic: string;
    bulletPoints: string[];
  };
  prepSeconds?: number; // Part 2 uchun 60 sek tayyorlanish
  speakSeconds: number;
}

export interface SpeakingTest {
  id: string;
  title: string;
  parts: SpeakingPart[];
}

// ===== Natijalar / Feedback uchun tiplar =====

export interface WritingFeedback {
  taskAchievement: number; // band 0-9
  coherenceCohesion: number;
  lexicalResource: number;
  grammaticalRange: number;
  overallBand: number;
  strengths: string[];
  weaknesses: string[];
  detailedFeedback: string;
  correctedHighlights?: { original: string; suggestion: string; reason: string }[];
  wordCount: number;
}

export interface SpeakingFeedback {
  fluencyCoherence: number;
  lexicalResource: number;
  grammaticalRange: number;
  pronunciation: number; // matn asosida taxminiy baho (haqiqiy talaffuzni audio orqali baholash kerak)
  overallBand: number;
  strengths: string[];
  weaknesses: string[];
  detailedFeedback: string;
}

export interface TestResult {
  id: string;
  module: ModuleType;
  testId: string;
  testTitle: string;
  date: string; // ISO string
  durationTakenSeconds: number;
  score?: number; // Listening/Reading uchun to'g'ri javoblar soni
  totalQuestions?: number;
  bandScore?: number; // hisoblangan yoki AI bahosi
  rawAnswers?: Record<string, string>;
  feedback?: WritingFeedback | SpeakingFeedback;
}

export interface UserProgress {
  results: TestResult[];
}
