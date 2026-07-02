// Supabase database jadvallariga mos TypeScript tiplari

export interface Student {
  id: string;
  username: string;
  password: string;
  full_name: string | null;
  current_day: number;
  mock_unlocked: boolean;
  created_at: string;
}

export interface WordEntry {
  word: string;
  synonym?: string; // ingliz tilidagi sinonim/definitsiya
  meaning: string; // o'zbek tilidagi ma'no
  example: string;
}

// word_entries jadvalidan keladigan to'liq qator (30 kunlik Essential Words dasturi)
export interface WordEntryRow {
  id: string;
  word: string;
  day_number: number;
  meaning: string;
  example: string;
  synonym: string | null;
  image_url: string | null;
  part_of_speech: string | null;
  created_at: string;
}

export interface DailyQuestion {
  id: string;
  type: "multiple-choice" | "fill-blank" | "true-false-not-given" | "short-answer";
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  wordLimit?: "ONE WORD ONLY" | "NO MORE THAN TWO WORDS" | "NO MORE THAN THREE WORDS";
}

export interface DailyTask {
  day_number: number;
  title: string;
  words_page_title: string | null;
  words_content: WordEntry[] | null;
  writing_prompt: string | null;
  writing_min_words: number;
  reading_title: string | null;
  reading_text: string | null;
  reading_questions: DailyQuestion[] | null;
  podcast_title: string | null;
  podcast_transcript: string | null;
  podcast_questions: DailyQuestion[] | null;
  dictation_text: string | null;
  created_at: string;
}

export interface DailyProgress {
  id: string;
  student_id: string;
  day_number: number;
  words_done: boolean;
  writing_done: boolean;
  reading_done: boolean;
  listening_done: boolean;
  dictation_done: boolean;
  writing_answer: string | null;
  reading_score: number | null;
  listening_score: number | null;
  dictation_answer: string | null;
  dictation_accuracy: number | null;
  completed_at: string | null;
  updated_at: string;
}

export interface StudentSession {
  id: string;
  username: string;
  full_name: string | null;
  current_day: number;
  mock_unlocked: boolean;
}

export function isDayComplete(progress: DailyProgress | null): boolean {
  if (!progress) return false;
  return (
    progress.words_done &&
    progress.writing_done &&
    progress.reading_done &&
    progress.listening_done &&
    progress.dictation_done
  );
}

// ===== Grammar bo'limi uchun tiplar =====

export interface GrammarExample {
  sentence: string;
  note: string;
}

export interface GrammarQuestion {
  id: string;
  type: "multiple-choice" | "fill-blank";
  text: string;
  options?: string[];
  correctAnswer: string | string[];
}

export interface GrammarFormulaPart {
  part: string; // masalan "S", "am/is/are", "not", "Object"
  label: string; // masalan "Subject", "Verb (to be)", "Object"
  color: "blue" | "green" | "amber" | "red" | "purple"; // rang guruhi
}

export interface GrammarLesson {
  day_number: number;
  title: string;
  formula: GrammarFormulaPart[][]; // bir nechta formula bo'lishi mumkin (masalan affirmative, negative, question)
  formula_labels: string[]; // har bir formula qatoriga sarlavha (masalan "Affirmative", "Negative", "Question")
  explanation: string;
  examples: GrammarExample[];
  questions: GrammarQuestion[];
}

export interface GrammarProgress {
  id: string;
  student_id: string;
  day_number: number;
  score: number | null;
  total_questions: number | null;
  completed_at: string | null;
  updated_at: string;
}
