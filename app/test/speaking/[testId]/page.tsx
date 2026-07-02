"use client";

import { useState, useMemo, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { speakingTests } from "@/data/speakingTests";
import { SpeakingTest } from "@/lib/types";
import { getGeneratedTest } from "@/lib/generatedTestStorage";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { saveResult, generateId } from "@/lib/storage";
import { Mic, MicOff, ChevronRight, Loader2, AlertTriangle } from "lucide-react";

function resolveTest(testId: string): SpeakingTest {
  const staticTest = speakingTests.find((t) => t.id === testId);
  if (staticTest) return staticTest;
  const generated = getGeneratedTest<SpeakingTest>(testId);
  if (generated) return generated;
  return speakingTests[0];
}

export default function SpeakingExamPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params);
  const router = useRouter();
  const test: SpeakingTest = useMemo(() => resolveTest(testId), [testId]);

  const [currentPartIdx, setCurrentPartIdx] = useState(0);
  const [partTranscripts, setPartTranscripts] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<"prep" | "speaking" | "done">("speaking");
  const [prepRemaining, setPrepRemaining] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  const { isSupported, isListening, transcript, interimTranscript, start, stop, reset } =
    useSpeechRecognition();

  const currentPart = test.parts[currentPartIdx];
  const isLastPart = currentPartIdx === test.parts.length - 1;

  // Part 2 uchun tayyorlanish vaqti
  useEffect(() => {
    if (currentPart.partNumber === 2 && currentPart.prepSeconds) {
      setPhase("prep");
      setPrepRemaining(currentPart.prepSeconds);
    } else {
      setPhase("speaking");
    }
    reset();
  }, [currentPartIdx]);

  useEffect(() => {
    if (phase !== "prep") return;
    if (prepRemaining <= 0) {
      setPhase("speaking");
      return;
    }
    const t = setTimeout(() => setPrepRemaining((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, prepRemaining]);

  function handleStartRecording() {
    reset();
    start();
  }

  function handleStopRecording() {
    stop();
    // Bir oz kutib, oxirgi transcript yangilanishini saqlaymiz
    setTimeout(() => {
      setPartTranscripts((prev) => ({
        ...prev,
        [currentPart.id]: (transcript + " " + interimTranscript).trim(),
      }));
    }, 300);
  }

  function goToNextPart() {
    // joriy transcript saqlanganini ta'minlash
    setPartTranscripts((prev) => ({
      ...prev,
      [currentPart.id]: (transcript + " " + interimTranscript).trim() || prev[currentPart.id] || "",
    }));

    if (isLastPart) {
      handleFinalSubmit();
    } else {
      setCurrentPartIdx((i) => i + 1);
    }
  }

  async function handleFinalSubmit() {
    setIsSubmitting(true);
    setError(null);

    const finalTranscripts = {
      ...partTranscripts,
      [currentPart.id]: (transcript + " " + interimTranscript).trim() || partTranscripts[currentPart.id] || "",
    };

    try {
      const res = await fetch("/api/evaluate-speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parts: test.parts.map((p) => ({
            partNumber: p.partNumber,
            title: p.title,
            prompt: p.cueCard ? p.cueCard.topic : p.prompt,
            transcript: finalTranscripts[p.id] || "",
          })),
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Baholashda xatolik");
      }

      const feedback = await res.json();
      const durationTakenSeconds = Math.round((Date.now() - startTime) / 1000);
      const resultId = generateId();

      saveResult({
        id: resultId,
        module: "speaking",
        testId: test.id,
        testTitle: test.title,
        date: new Date().toISOString(),
        durationTakenSeconds,
        bandScore: feedback.overallBand,
        rawAnswers: finalTranscripts,
        feedback,
      });

      router.push(`/results/${resultId}?type=speaking`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noma'lum xatolik yuz berdi");
      setIsSubmitting(false);
    }
  }

  if (!isSupported) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md rounded-lg border border-[var(--color-amber)]/40 bg-white p-6 text-center">
          <AlertTriangle className="mx-auto mb-3 text-[var(--color-amber)]" size={32} />
          <h2 className="serif-display mb-2 text-lg font-semibold">
            Brauzeringiz qo&apos;llab-quvvatlamaydi
          </h2>
          <p className="text-sm text-neutral-600">
            Nutqni matnga aylantirish funksiyasi joriy brauzerda mavjud emas. Iltimos, Google
            Chrome brauzerida qaytadan urinib ko&apos;ring.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-shell flex min-h-screen flex-col">
      <header className="exam-topbar flex items-center justify-between px-4 py-2.5">
        <div>
          <p className="serif-display text-sm font-semibold">{test.title}</p>
          <p className="text-[11px] text-white/60">{currentPart.title}</p>
        </div>
        <div className="text-xs text-white/60">
          Qism {currentPartIdx + 1} / {test.parts.length}
        </div>
      </header>

      {error && (
        <div className="bg-[var(--color-red)]/10 px-6 py-2 text-sm text-[var(--color-red)]">
          {error}
        </div>
      )}

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-10">
        <div className="rounded-lg border border-[var(--color-line)] bg-white p-7">
          {currentPart.cueCard ? (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
                Cue Card
              </p>
              <p className="serif-display mb-3 text-lg font-semibold text-[var(--color-navy)]">
                {currentPart.cueCard.topic}
              </p>
              <p className="mb-2 text-sm text-neutral-500">Quyidagilarni aytib bering:</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700">
                {currentPart.cueCard.bulletPoints.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
                {currentPart.title}
              </p>
              <p className="whitespace-pre-line text-[15px] leading-relaxed text-neutral-800">
                {currentPart.prompt}
              </p>
            </div>
          )}
        </div>

        {/* Prep phase */}
        {phase === "prep" && (
          <div className="mt-6 flex flex-col items-center rounded-lg border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/10 p-6">
            <p className="mb-1 text-sm font-medium text-neutral-700">Tayyorlanish vaqti</p>
            <p className="timer-mono text-3xl font-bold text-[var(--color-amber)]">
              {Math.floor(prepRemaining / 60)}:{(prepRemaining % 60).toString().padStart(2, "0")}
            </p>
            <button
              onClick={() => setPhase("speaking")}
              className="mt-3 text-sm font-medium text-[var(--color-teal)] hover:underline"
            >
              Tayyorlanishni o&apos;tkazib yuborish
            </button>
          </div>
        )}

        {/* Speaking phase */}
        {phase === "speaking" && (
          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={isListening ? handleStopRecording : handleStartRecording}
              className={`flex h-20 w-20 items-center justify-center rounded-full transition-all ${
                isListening
                  ? "bg-[var(--color-red)] shadow-lg shadow-[var(--color-red)]/30"
                  : "bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)]"
              }`}
            >
              {isListening ? <MicOff size={28} className="text-white" /> : <Mic size={28} className="text-white" />}
            </button>
            <p className="mt-3 text-sm font-medium text-neutral-600">
              {isListening ? "Yozib olinmoqda... (to'xtatish uchun bosing)" : "Gapirishni boshlash uchun bosing"}
            </p>

            {(transcript || interimTranscript) && (
              <div className="mt-5 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Sizning javobingiz (matnga aylantirilgan)
                </p>
                <p className="text-sm text-neutral-700">
                  {transcript}
                  <span className="text-neutral-400">{interimTranscript}</span>
                </p>
              </div>
            )}

            <button
              onClick={goToNextPart}
              disabled={isSubmitting}
              className="mt-6 flex items-center gap-2 rounded-md bg-[var(--color-navy)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-navy-light)] disabled:opacity-60"
            >
              {isSubmitting && <Loader2 size={14} className="animate-spin" />}
              {isSubmitting
                ? "Baholanmoqda..."
                : isLastPart
                ? "Testni yakunlash va baholash"
                : "Keyingi qism"}
              {!isSubmitting && <ChevronRight size={15} />}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
