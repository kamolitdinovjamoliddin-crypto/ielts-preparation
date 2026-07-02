"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { ArrowLeft, Home, Trash2, Check, BookOpen, Loader2 } from "lucide-react";

interface SavedWord {
  id: string;
  word: string;
  context_sentence: string | null;
  is_learned: boolean;
  created_at: string;
}

export default function WordBankPage() {
  const session = useRequireAuth();
  const [words, setWords] = useState<SavedWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "learning" | "learned">("all");
  const [processing, setProcessing] = useState<string | null>(null);

  useEffect(() => {
    if (!session) return;
    loadWords();
  }, [session]);

  async function loadWords() {
    setLoading(true);
    const res = await fetch(`/api/word-bank?studentId=${session!.id}`);
    const data = await res.json();
    setWords(data || []);
    setLoading(false);
  }

  async function toggleLearned(word: SavedWord) {
    setProcessing(word.word);
    await fetch("/api/word-bank", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId: session!.id,
        word: word.word,
        isLearned: !word.is_learned,
      }),
    });
    setWords((prev) =>
      prev.map((w) => (w.word === word.word ? { ...w, is_learned: !w.is_learned } : w))
    );
    setProcessing(null);
  }

  async function deleteWord(word: string) {
    setProcessing(word);
    await fetch(`/api/word-bank?studentId=${session!.id}&word=${encodeURIComponent(word)}`, {
      method: "DELETE",
    });
    setWords((prev) => prev.filter((w) => w.word !== word));
    setProcessing(null);
  }

  if (!session) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  const filtered =
    filter === "all"
      ? words
      : filter === "learned"
      ? words.filter((w) => w.is_learned)
      : words.filter((w) => !w.is_learned);

  const learnedCount = words.filter((w) => w.is_learned).length;

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <p className="serif-display text-lg font-semibold">Word Bank</p>
              <p className="text-[11px] text-white/60">
                {learnedCount} / {words.length} learned
              </p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        {/* Filter tabs */}
        <div className="mb-5 flex gap-2">
          {(["all", "learning", "learned"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? "bg-[var(--color-navy)] text-white"
                  : "border border-[var(--color-line)] bg-white text-neutral-600 hover:bg-[var(--color-paper-dim)]"
              }`}
            >
              {f === "all" ? `All (${words.length})` : f === "learned" ? `Learned (${learnedCount})` : `Learning (${words.length - learnedCount})`}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 size={24} className="animate-spin text-neutral-300" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[var(--color-line)] p-10 text-center">
            <BookOpen size={28} className="mx-auto mb-2 text-neutral-300" />
            <p className="text-sm text-neutral-400">
              {words.length === 0
                ? "No saved words yet. Select a word in any Reading passage to save it here."
                : "No words in this category."}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((w) => (
              <div
                key={w.word}
                className={`flex items-center justify-between rounded-lg border bg-white px-4 py-3 ${
                  w.is_learned ? "border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5" : "border-[var(--color-line)]"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p className={`font-medium ${w.is_learned ? "text-[var(--color-teal-dark)]" : "text-[var(--color-navy)]"}`}>
                    {w.word}
                  </p>
                  {w.context_sentence && (
                    <p className="truncate text-xs text-neutral-400">{w.context_sentence}</p>
                  )}
                </div>
                <div className="ml-3 flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => toggleLearned(w)}
                    disabled={processing === w.word}
                    title={w.is_learned ? "Mark as learning" : "Mark as learned"}
                    className={`flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
                      w.is_learned
                        ? "border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 text-[var(--color-teal-dark)]"
                        : "border-[var(--color-line)] text-neutral-500 hover:bg-[var(--color-paper-dim)]"
                    }`}
                  >
                    {processing === w.word ? (
                      <Loader2 size={11} className="animate-spin" />
                    ) : (
                      <Check size={11} />
                    )}
                    {w.is_learned ? "Learned" : "Mark learned"}
                  </button>
                  <button
                    onClick={() => deleteWord(w.word)}
                    disabled={processing === w.word}
                    title="Remove from Word Bank"
                    className="rounded-md p-1.5 text-neutral-300 hover:bg-[var(--color-red)]/10 hover:text-[var(--color-red)]"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
