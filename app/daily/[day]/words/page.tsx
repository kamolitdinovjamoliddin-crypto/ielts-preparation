"use client";

import { use, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { markTaskDone } from "@/lib/useDailyTask";
import { WordEntryRow } from "@/lib/dbTypes";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Home,
  Brain,
  ChevronRight,
  RotateCcw,
  BookOpen,
} from "lucide-react";

const PIXABAY_KEY = "56480245-8cd7aba82fdb06665128005e5";

type Mode = "learn" | "test" | "result";

interface WordImage {
  [word: string]: string;
}

interface TestQuestion {
  word: WordEntryRow;
  options: string[];
}

export default function WordsPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();

  const [words, setWords] = useState<WordEntryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<WordImage>({});
  const [isSaving, setIsSaving] = useState(false);

  const [mode, setMode] = useState<Mode>("learn");
  const [learnIndex, setLearnIndex] = useState(0);
  const [readWords, setReadWords] = useState<Set<string>>(new Set());

  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>([]);
  const [testIndex, setTestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [testScore, setTestScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  // So'zlarni database'dan yuklash
  useEffect(() => {
    async function loadWords() {
      setLoading(true);
      const res = await fetch(`/api/daily-words?dayNumber=${dayNumber}`);
      const data: WordEntryRow[] = await res.json();
      setWords(data);
      setLoading(false);
    }
    loadWords();
  }, [dayNumber]);

  // Pixabay'dan rasm olish (har bir so'z uchun, faqat bir marta)
  useEffect(() => {
    if (words.length === 0) return;

    async function fetchImages() {
      const newImages: WordImage = {};
      await Promise.all(
        words.map(async (entry) => {
          try {
            const res = await fetch(
              `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(
                entry.word
              )}&image_type=photo&per_page=3&safesearch=true`
            );
            const data = await res.json();
            if (data.hits && data.hits.length > 0) {
              newImages[entry.word] = data.hits[0].webformatURL;
            }
          } catch {
            // rasm topilmasa, shunchaki bo'sh qoladi
          }
        })
      );
      setImages(newImages);
    }
    fetchImages();
  }, [words]);

  const buildTestQuestions = useCallback((wordList: WordEntryRow[]): TestQuestion[] => {
    return wordList.map((w) => {
      const otherMeanings = wordList
        .filter((x) => x.word !== w.word)
        .map((x) => x.meaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      const options = [w.meaning, ...otherMeanings].sort(() => Math.random() - 0.5);
      return { word: w, options };
    });
  }, []);

  if (!session || loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">No words found for this day.</p>
      </div>
    );
  }

  const allRead = readWords.size === words.length;
  const currentLearnWord = words[learnIndex];

  function handleMarkRead(word: string) {
    setReadWords((prev) => new Set(prev).add(word));
  }

  function goToNextLearnWord() {
    if (learnIndex < words.length - 1) {
      setLearnIndex((i) => i + 1);
    }
  }

  function startTest() {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setTestQuestions(buildTestQuestions(shuffled));
    setTestIndex(0);
    setTestScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setMode("test");
  }

  function handleSelectAnswer(option: string) {
    if (answered) return;
    setSelectedAnswer(option);
    setAnswered(true);
    if (option === testQuestions[testIndex].word.meaning) {
      setTestScore((s) => s + 1);
    }
  }

  function goToNextTestQuestion() {
    if (testIndex < testQuestions.length - 1) {
      setTestIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setMode("result");
    }
  }

  async function handleComplete() {
    setIsSaving(true);
    await markTaskDone(session!.id, dayNumber, "words_done");
    router.push("/dashboard");
  }

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/dashboard")} className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <div>
              <p className="serif-display text-lg font-semibold">Essential Words</p>
              <p className="text-[11px] text-white/60">
                Day {dayNumber} &middot; {words.length} words
              </p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        {/* LEARN MODE */}
        {mode === "learn" && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-neutral-500">
                Learn each word, then mark it as known.
              </p>
              <p className="text-sm font-medium text-[var(--color-teal)]">
                {readWords.size} / {words.length}
              </p>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-6">
              {images[currentLearnWord.word] && (
                <img
                  src={images[currentLearnWord.word]}
                  alt={currentLearnWord.word}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
              )}
              <p className="serif-display text-2xl font-semibold text-[var(--color-navy)]">
                {currentLearnWord.word}
                {currentLearnWord.part_of_speech && (
                  <span className="ml-2 text-sm font-normal italic text-neutral-400">
                    {currentLearnWord.part_of_speech}
                  </span>
                )}
              </p>
              {currentLearnWord.synonym && (
                <p className="mt-1 text-sm font-medium text-[var(--color-teal-dark)]">
                  {currentLearnWord.synonym}
                </p>
              )}
              <p className="mt-1 text-sm text-neutral-500">{currentLearnWord.meaning}</p>
              <p className="mt-3 text-sm italic text-neutral-600">
                &ldquo;{currentLearnWord.example}&rdquo;
              </p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => {
                    handleMarkRead(currentLearnWord.word);
                    goToNextLearnWord();
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
                >
                  {readWords.has(currentLearnWord.word) ? (
                    <CheckCircle2 size={15} />
                  ) : (
                    "Got it"
                  )}
                  {learnIndex < words.length - 1 && <ChevronRight size={15} />}
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {words.map((w, i) => (
                <button
                  key={w.word}
                  onClick={() => setLearnIndex(i)}
                  className={`h-2 flex-1 rounded-full ${
                    i === learnIndex
                      ? "bg-[var(--color-navy)]"
                      : readWords.has(w.word)
                      ? "bg-[var(--color-teal)]/50"
                      : "bg-neutral-200"
                  }`}
                  title={w.word}
                />
              ))}
            </div>

            {allRead && (
              <button
                onClick={startTest}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-navy)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-navy-light)]"
              >
                <Brain size={16} /> Take the Quiz
              </button>
            )}
          </>
        )}

        {/* TEST MODE */}
        {mode === "test" && testQuestions.length > 0 && (
          <>
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-neutral-500">
                Question {testIndex + 1} / {testQuestions.length}
              </span>
              <span className="font-medium text-[var(--color-teal)]">Score: {testScore}</span>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-6">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                What does this word mean?
              </p>
              <p className="serif-display mb-5 text-2xl font-semibold text-[var(--color-navy)]">
                {testQuestions[testIndex].word.word}
              </p>

              <div className="space-y-2">
                {testQuestions[testIndex].options.map((opt) => {
                  const isCorrectOpt = opt === testQuestions[testIndex].word.meaning;
                  const isSelected = opt === selectedAnswer;
                  let style = "border-[var(--color-line)] bg-white hover:bg-[var(--color-paper-dim)]";
                  if (answered && isCorrectOpt) {
                    style = "border-[var(--color-teal)] bg-[var(--color-teal)]/10";
                  } else if (answered && isSelected && !isCorrectOpt) {
                    style = "border-[var(--color-red)] bg-[var(--color-red)]/10";
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectAnswer(opt)}
                      disabled={answered}
                      className={`w-full rounded-md border px-4 py-2.5 text-left text-sm ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <button
                  onClick={goToNextTestQuestion}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-navy)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-navy-light)]"
                >
                  {testIndex < testQuestions.length - 1 ? "Next Question" : "See Results"}
                  <ChevronRight size={15} />
                </button>
              )}
            </div>
          </>
        )}

        {/* RESULT MODE */}
        {mode === "result" && (
          <div className="rounded-lg border border-[var(--color-line)] bg-white p-8 text-center">
            <BookOpen size={32} className="mx-auto mb-3 text-[var(--color-teal)]" />
            <p className="serif-display text-xl font-semibold text-[var(--color-navy)]">
              Quiz Complete!
            </p>
            <p className="mt-2 text-3xl font-bold text-[var(--color-teal)]">
              {testScore} / {testQuestions.length}
            </p>
            <p className="mt-1 text-sm text-neutral-500">correct answers</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={startTest}
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-line)] bg-white py-2.5 text-sm font-medium text-neutral-600 hover:bg-[var(--color-paper-dim)]"
              >
                <RotateCcw size={14} /> Retake Quiz
              </button>
              <button
                onClick={handleComplete}
                disabled={isSaving}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
              >
                {isSaving && <Loader2 size={15} className="animate-spin" />}
                Finish Exercise
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
