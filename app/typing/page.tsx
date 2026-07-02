"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { ArrowLeft, Home, RotateCcw, Zap, Target, Clock } from "lucide-react";

type DurationOption = 15 | 30 | 60;

interface CharState {
  char: string;
  status: "pending" | "correct" | "incorrect" | "current";
}

function generateWordStream(words: string[], count: number): string[] {
  const stream: string[] = [];
  for (let i = 0; i < count; i++) {
    stream.push(words[Math.floor(Math.random() * words.length)]);
  }
  return stream;
}

export default function TypingTestPage() {
  const session = useRequireAuth();
  const router = useRouter();

  const [sourceWords, setSourceWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [duration, setDuration] = useState<DurationOption>(30);
  const [wordStream, setWordStream] = useState<string[]>([]);
  const [fullText, setFullText] = useState("");

  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [typedText, setTypedText] = useState("");
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // O'quvchining hozirgi kunigacha bo'lgan so'zlarini yuklash
  useEffect(() => {
    if (!session) return;
    async function loadWords() {
      setLoading(true);
      const res = await fetch(`/api/typing-words?upToDay=${session!.current_day}`);
      const data = await res.json();
      setSourceWords(data.words || []);
      setLoading(false);
    }
    loadWords();
  }, [session]);

  const buildNewStream = useCallback(
    (words: string[]) => {
      // Yetarlicha uzun so'z oqimi yaratamiz (60 soniyalik eng uzun rejim uchun ham etarli bo'lsin)
      const stream = generateWordStream(words, 120);
      setWordStream(stream);
      setFullText(stream.join(" "));
    },
    []
  );

  useEffect(() => {
    if (sourceWords.length > 0) {
      buildNewStream(sourceWords);
    }
  }, [sourceWords, buildNewStream]);

  function resetTest(newDuration?: DurationOption) {
    const d = newDuration ?? duration;
    setDuration(d);
    setTimeLeft(d);
    setStatus("idle");
    setTypedText("");
    setCorrectChars(0);
    setIncorrectChars(0);
    startTimeRef.current = null;
    if (timerRef.current) clearInterval(timerRef.current);
    if (sourceWords.length > 0) buildNewStream(sourceWords);
    inputRef.current?.focus();
  }

  function startTimer() {
    startTimeRef.current = Date.now();
    setStatus("running");
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setStatus("done");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (status === "idle") {
      startTimer();
    }
    if (status === "done") return;

    setTypedText(value);

    // To'g'ri/noto'g'ri belgilarni hisoblash
    let correct = 0;
    let incorrect = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === fullText[i]) correct++;
      else incorrect++;
    }
    setCorrectChars(correct);
    setIncorrectChars(incorrect);

    // Agar matn tugab qolsa, yangi so'z qo'shamiz (uzoq sessiyalar uchun)
    if (value.length > fullText.length - 50) {
      const more = generateWordStream(sourceWords, 60);
      setWordStream((prev) => [...prev, ...more]);
      setFullText((prev) => prev + " " + more.join(" "));
    }
  }

  const elapsedSeconds = duration - timeLeft;
  const wpm =
    status !== "idle" && elapsedSeconds > 0
      ? Math.round((correctChars / 5) / (elapsedSeconds / 60))
      : 0;
  const totalTyped = correctChars + incorrectChars;
  const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;

  function renderChars(): CharState[] {
    const chars: CharState[] = [];
    const visibleLength = Math.max(typedText.length + 80, 100);
    for (let i = 0; i < Math.min(visibleLength, fullText.length); i++) {
      let charStatus: CharState["status"] = "pending";
      if (i < typedText.length) {
        charStatus = typedText[i] === fullText[i] ? "correct" : "incorrect";
      } else if (i === typedText.length) {
        charStatus = "current";
      }
      chars.push({ char: fullText[i], status: charStatus });
    }
    return chars;
  }

  if (!session) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading words...</p>
      </div>
    );
  }

  if (sourceWords.length === 0) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center px-4">
        <p className="text-center text-neutral-400">
          No words available yet. Complete Day 1 Essential Words first.
        </p>
      </div>
    );
  }

  return (
    <div className="exam-shell flex min-h-screen flex-col">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/dashboard")} className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <div>
              <p className="serif-display text-lg font-semibold">Typing Practice</p>
              <p className="text-[11px] text-white/60">
                Words from Days 1&ndash;{session.current_day}
              </p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10">
        {/* Duration selector */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {([15, 30, 60] as DurationOption[]).map((d) => (
            <button
              key={d}
              onClick={() => resetTest(d)}
              disabled={status === "running"}
              className={`timer-mono rounded-md px-4 py-1.5 text-sm font-semibold transition-colors disabled:opacity-40 ${
                duration === d
                  ? "bg-[var(--color-navy)] text-white"
                  : "bg-white text-neutral-500 hover:bg-[var(--color-paper-dim)]"
              }`}
            >
              {d}s
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="mb-6 flex items-center justify-center gap-8">
          <div className="flex items-center gap-1.5 text-[var(--color-navy)]">
            <Clock size={16} />
            <span className="timer-mono text-2xl font-bold">{timeLeft}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--color-teal)]">
            <Zap size={16} />
            <span className="timer-mono text-2xl font-bold">{wpm}</span>
            <span className="text-xs text-neutral-400">wpm</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Target size={16} />
            <span className="timer-mono text-2xl font-bold">{accuracy}%</span>
          </div>
        </div>

        {/* Typing area */}
        {status !== "done" ? (
          <div
            className="relative cursor-text rounded-lg border border-[var(--color-line)] bg-white p-6"
            onClick={() => inputRef.current?.focus()}
          >
            <p className="font-mono text-xl leading-relaxed tracking-wide">
              {renderChars().map((c, i) => (
                <span
                  key={i}
                  className={
                    c.status === "correct"
                      ? "text-[var(--color-ink)]"
                      : c.status === "incorrect"
                      ? "bg-[var(--color-red)]/20 text-[var(--color-red)]"
                      : c.status === "current"
                      ? "border-l-2 border-[var(--color-teal)] text-neutral-300"
                      : "text-neutral-300"
                  }
                >
                  {c.char}
                </span>
              ))}
            </p>
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onChange={handleInputChange}
              autoFocus
              className="absolute inset-0 h-full w-full cursor-text opacity-0"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        ) : (
          <div className="rounded-lg border border-[var(--color-line)] bg-white p-8 text-center">
            <p className="serif-display mb-4 text-xl font-semibold text-[var(--color-navy)]">
              Test Complete!
            </p>
            <div className="flex items-center justify-center gap-10">
              <div>
                <p className="timer-mono text-4xl font-bold text-[var(--color-teal)]">{wpm}</p>
                <p className="text-xs uppercase tracking-wide text-neutral-400">WPM</p>
              </div>
              <div>
                <p className="timer-mono text-4xl font-bold text-[var(--color-navy)]">
                  {accuracy}%
                </p>
                <p className="text-xs uppercase tracking-wide text-neutral-400">Accuracy</p>
              </div>
            </div>
            <button
              onClick={() => resetTest()}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-teal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
            >
              <RotateCcw size={15} /> Try Again
            </button>
          </div>
        )}

        {status !== "done" && (
          <p className="mt-4 text-center text-xs text-neutral-400">
            Click the box above and start typing &mdash; the timer starts automatically.
          </p>
        )}

        {status === "running" && (
          <button
            onClick={() => resetTest()}
            className="mx-auto mt-4 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-600"
          >
            <RotateCcw size={13} /> Restart
          </button>
        )}
      </main>
    </div>
  );
}
