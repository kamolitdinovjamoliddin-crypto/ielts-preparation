"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { speakingTests } from "@/data/speakingTests";
import { SpeakingTest } from "@/lib/types";
import { ArrowLeft, Mic, Clock } from "lucide-react";
import GenerateTestCard from "@/components/GenerateTestCard";
import { saveGeneratedTest } from "@/lib/generatedTestStorage";

export default function SpeakingIndexPage() {
  const router = useRouter();

  function handleGenerated(data: unknown) {
    const test = data as SpeakingTest;
    saveGeneratedTest(test.id, test);
    router.push(`/test/speaking/${test.id}`);
  }

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-4">
          <Link href="/" className="text-white/70 hover:text-white">
            <ArrowLeft size={18} />
          </Link>
          <p className="serif-display text-lg font-semibold">Speaking testlari</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6">
          <GenerateTestCard
            apiEndpoint="/api/generate-speaking-prompt"
            moduleLabel="Speaking"
            onGenerated={handleGenerated}
            supportsDifficulty={false}
            supportsTopic
          />
        </div>

        <div className="mb-6 rounded-md border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/10 px-4 py-3 text-sm text-[var(--color-ink)]">
          <strong>Eslatma:</strong> Bu modul brauzerning mikrofon va nutqni matnga aylantirish
          (speech-to-text) imkoniyatidan foydalanadi. Eng yaxshi natija uchun Google Chrome
          brauzerini ishlatish tavsiya etiladi.
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Tayyor namuna testlar
        </p>
        <div className="space-y-4">
          {speakingTests.map((test) => (
            <button
              key={test.id}
              onClick={() => router.push(`/test/speaking/${test.id}`)}
              className="flex w-full items-center justify-between rounded-lg border border-[var(--color-line)] bg-white p-5 text-left transition-all hover:border-[var(--color-teal)] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                  <Mic size={20} />
                </div>
                <div>
                  <p className="serif-display text-lg font-semibold text-[var(--color-navy)]">
                    {test.title}
                  </p>
                  <p className="text-sm text-neutral-500">Part 1, 2, 3</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                <Clock size={14} />
                11-14 daqiqa
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
