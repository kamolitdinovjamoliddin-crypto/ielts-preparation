"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { GrammarProgress } from "@/lib/dbTypes";
import { ArrowLeft, Home, CheckCircle2, Circle, GraduationCap } from "lucide-react";

const TOPICS: { day: number; title: string }[] = [
  { day: 1, title: "To Be (am / is / are)" },
  { day: 2, title: "Personal Pronouns" },
  { day: 3, title: "Articles: a, an, the" },
  { day: 4, title: "Singular and Plural Nouns" },
  { day: 5, title: "This, That, These, Those" },
  { day: 6, title: "Possessive Adjectives" },
  { day: 7, title: "Possessive 's" },
  { day: 8, title: "Present Simple (affirmative)" },
  { day: 9, title: "Present Simple (negative & questions)" },
  { day: 10, title: "Adverbs of Frequency" },
  { day: 11, title: "Present Continuous" },
  { day: 12, title: "Present Simple vs Continuous" },
  { day: 13, title: "There is / There are" },
  { day: 14, title: "Prepositions of Place" },
  { day: 15, title: "Can / Can't (ability)" },
  { day: 16, title: "Past Simple: to be (was/were)" },
  { day: 17, title: "Past Simple: Regular Verbs" },
  { day: 18, title: "Past Simple: Irregular Verbs" },
  { day: 19, title: "Past Simple: Negative & Questions" },
  { day: 20, title: "Past Continuous" },
  { day: 21, title: "Prepositions of Time" },
  { day: 22, title: "Adverbs of Manner" },
  { day: 23, title: "Comparative Adjectives" },
  { day: 24, title: "Superlative Adjectives" },
  { day: 25, title: "Future: going to" },
  { day: 26, title: "Future: will" },
  { day: 27, title: "Modals: must / should" },
  { day: 28, title: "Object Pronouns" },
  { day: 29, title: "Conjunctions: and, but, because" },
  { day: 30, title: "Quantifiers: some, any, much, many" },
];

export default function GrammarIndexPage() {
  const session = useRequireAuth();
  const [progress, setProgress] = useState<GrammarProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;
    async function loadProgress() {
      const res = await fetch(`/api/grammar-progress?studentId=${session!.id}`);
      const data = await res.json();
      setProgress(data || []);
      setLoading(false);
    }
    loadProgress();
  }, [session]);

  if (!session || loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  const completedDays = new Set(
    progress.filter((p) => p.completed_at).map((p) => p.day_number)
  );

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <p className="serif-display text-lg font-semibold">Grammar</p>
              <p className="text-[11px] text-white/60">Zero to Elementary &middot; 30 lessons</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        <p className="mb-5 text-sm text-neutral-500">
          {completedDays.size} / {TOPICS.length} lessons completed
        </p>

        <div className="space-y-2">
          {TOPICS.map((topic) => {
            const done = completedDays.has(topic.day);
            return (
              <Link
                key={topic.day}
                href={`/grammar/${topic.day}`}
                className={`flex items-center justify-between rounded-lg border p-3.5 transition-colors ${
                  done
                    ? "border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5"
                    : "border-[var(--color-line)] bg-white hover:border-[var(--color-teal)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold ${
                      done
                        ? "bg-[var(--color-teal)] text-white"
                        : "bg-[var(--color-navy)]/8 text-[var(--color-navy)]"
                    }`}
                  >
                    {topic.day}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-ink)]">
                    {topic.title}
                  </span>
                </div>
                {done ? (
                  <CheckCircle2 size={18} className="text-[var(--color-teal)]" />
                ) : (
                  <Circle size={18} className="text-neutral-300" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-lg border border-dashed border-[var(--color-line)] bg-[var(--color-paper-dim)] p-4">
          <GraduationCap size={20} className="text-neutral-400" />
          <p className="text-sm text-neutral-500">
            This Grammar track is independent &mdash; you can study any lesson at any time.
          </p>
        </div>
      </main>
    </div>
  );
}
