"use client";

import Link from "next/link";
import { Headphones, BookOpen, PenLine, Mic, History, ArrowRight, Lock, ArrowLeft } from "lucide-react";
import { useRequireAuth } from "@/lib/useRequireAuth";

const modules = [
  {
    href: "/test/listening",
    icon: Headphones,
    title: "Listening",
    description: "4 sections, 40 questions. Listening comprehension test based on transcript audio.",
    duration: "30 minutes",
  },
  {
    href: "/test/reading",
    icon: BookOpen,
    title: "Reading",
    description: "3 passages, academic reading comprehension test.",
    duration: "60 minutes",
  },
  {
    href: "/test/writing",
    icon: PenLine,
    title: "Writing",
    description: "Task 1 and Task 2. Detailed AI analysis with a band score.",
    duration: "60 minutes",
  },
  {
    href: "/test/speaking",
    icon: Mic,
    title: "Speaking",
    description: "3 parts: Interview, Cue Card, Discussion. Spoken answers with AI feedback.",
    duration: "11-14 minutes",
  },
];

export default function MockHome() {
  const session = useRequireAuth();

  if (!session) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!session.mock_unlocked) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center px-4">
        <div className="max-w-sm rounded-lg border border-[var(--color-line)] bg-white p-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <Lock size={22} />
          </div>
          <h2 className="serif-display text-lg font-semibold text-[var(--color-navy)]">
            Mock test is currently locked
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            You need to complete all your daily tasks before accessing the mock exam.
          </p>
          <Link
            href="/dashboard"
            className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-teal)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
          >
            <ArrowLeft size={14} /> Back to Daily Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-shell flex min-h-screen flex-col">
      {/* Header */}
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Link href="/dashboard" className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[var(--color-teal)] font-serif text-lg font-bold text-white">
              I
            </div>
            <div>
              <p className="serif-display text-lg font-semibold leading-none">IELTS CD Mock</p>
              <p className="text-[11px] text-white/60">Online exam simulator</p>
            </div>
          </div>
          <Link
            href="/history"
            className="flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <History size={15} />
            Results History
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-teal)]">
            Computer-Delivered IELTS format
          </p>
          <h1 className="serif-display max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-navy)]">
            Prepare like the real exam, with AI evaluation.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-600">
            Try all 4 modules — Listening, Reading, Writing, Speaking — in an environment close to
            the real CD IELTS interface. Get detailed analysis and a band score after every
            attempt.
          </p>
        </div>
      </section>

      {/* Modules */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.href}
                  href={mod.href}
                  className="group flex flex-col rounded-lg border border-[var(--color-line)] bg-white p-5 transition-all hover:border-[var(--color-teal)] hover:shadow-md"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-medium text-neutral-400">{mod.duration}</span>
                  </div>
                  <h3 className="serif-display text-xl font-semibold text-[var(--color-navy)]">
                    {mod.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-600">
                    {mod.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--color-teal)]">
                    Start Test
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--color-line)] py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-xs text-neutral-400">
          This mock test platform is built for practice purposes and is not affiliated with the
          official IELTS exam.
        </div>
      </footer>
    </div>
  );
}
