"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllResults, getOverallAverageBand, clearAllResults } from "@/lib/storage";
import { TestResult } from "@/lib/types";
import { formatBand } from "@/lib/bandCalculator";
import {
  ArrowLeft,
  Headphones,
  BookOpen,
  PenLine,
  Mic,
  Trash2,
  TrendingUp,
} from "lucide-react";

const moduleIcons = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
};

export default function HistoryPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [avgBand, setAvgBand] = useState<number | null>(null);

  useEffect(() => {
    setResults(getAllResults());
    setAvgBand(getOverallAverageBand());
  }, []);

  function handleClear() {
    if (confirm("Barcha natijalar tarixini o'chirishni xohlaysizmi? Bu amalni qaytarib bo'lmaydi.")) {
      clearAllResults();
      setResults([]);
      setAvgBand(null);
    }
  }

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <p className="serif-display text-lg font-semibold">Natijalar tarixi</p>
          </div>
          {results.length > 0 && (
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
            >
              <Trash2 size={14} /> Tozalash
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        {avgBand !== null && (
          <div className="mb-6 flex items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-500">O&apos;rtacha band score</p>
              <p className="serif-display text-2xl font-bold text-[var(--color-navy)]">
                {formatBand(avgBand)}
              </p>
            </div>
          </div>
        )}

        {results.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[var(--color-line)] bg-white p-10 text-center">
            <p className="text-neutral-500">Hali hech qanday test topshirilmagan.</p>
            <Link href="/" className="mt-3 inline-block text-sm font-medium text-[var(--color-teal)] hover:underline">
              Birinchi testni boshlash
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {results.map((r) => {
              const Icon = moduleIcons[r.module];
              return (
                <Link
                  key={r.id}
                  href={`/results/${r.id}`}
                  className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-teal)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold capitalize text-[var(--color-navy)]">
                        {r.testTitle}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {new Date(r.date).toLocaleDateString("uz-UZ", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  {typeof r.bandScore === "number" && (
                    <span className="serif-display text-lg font-bold text-[var(--color-teal)]">
                      {formatBand(r.bandScore)}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
