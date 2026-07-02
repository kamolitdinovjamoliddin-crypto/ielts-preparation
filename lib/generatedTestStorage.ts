// Generatsiya qilingan testlarni vaqtinchalik (faqat joriy brauzer sessiyasida) saqlash uchun.
// Bular doimiy ma'lumotlar bazasiga yozilmaydi, chunki har safar yangi, bir martalik test bo'ladi.

import { ReadingTest, ListeningTest, WritingTest, SpeakingTest } from "./types";

const PREFIX = "ielts_generated_";

export function saveGeneratedTest(
  id: string,
  test: ReadingTest | ListeningTest | WritingTest | SpeakingTest
): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(PREFIX + id, JSON.stringify(test));
}

export function getGeneratedTest<T>(id: string): T | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(PREFIX + id);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}
