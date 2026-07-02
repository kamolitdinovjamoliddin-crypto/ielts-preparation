"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { clearSession } from "@/lib/session";
import { DailyProgress, isDayComplete } from "@/lib/dbTypes";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Lock,
  LogOut,
  Headphones,
  PenLine,
  Mic,
  GraduationCap,
  Keyboard,
  SpellCheck,
  BookMarked,
} from "lucide-react";

interface StudentInfo {
  current_day: number;
  mock_unlocked: boolean;
  full_name: string | null;
}

const TOTAL_DAYS = 30;

export default function DashboardPage() {
  const session = useRequireAuth();
  const router = useRouter();
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [todayProgress, setTodayProgress] = useState<DailyProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;
    loadData();
  }, [session]);

  async function loadData() {
    if (!session) return;
    setLoading(true);

    const studentRes = await fetch(`/api/student-status?studentId=${session.id}`);
    const student = await studentRes.json();
    setStudentInfo(student);

    if (student.current_day <= TOTAL_DAYS) {
      const progressRes = await fetch(
        `/api/daily-progress?studentId=${session.id}&dayNumber=${student.current_day}`
      );
      const progressData = await progressRes.json();
      setTodayProgress(Array.isArray(progressData) ? progressData[0] || null : null);
    }

    setLoading(false);
  }

  function handleLogout() {
    clearSession();
    router.push("/login");
  }

  if (!session || loading || !studentInfo) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  const currentDay = studentInfo.current_day;
  const isMockUnlocked = studentInfo.mock_unlocked;

  const tasks = [
    { key: "words_done", label: "Essential Words", icon: BookOpen, href: `/daily/${currentDay}/words` },
    { key: "writing_done", label: "Writing Exercise", icon: PenLine, href: `/daily/${currentDay}/writing` },
    { key: "reading_done", label: "Reading Exercise", icon: BookOpen, href: `/daily/${currentDay}/reading` },
    { key: "listening_done", label: "Podcast / Listening", icon: Headphones, href: `/daily/${currentDay}/listening` },
    { key: "dictation_done", label: "Dictation", icon: Mic, href: `/daily/${currentDay}/dictation` },
  ];

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[var(--color-teal)] font-serif text-lg font-bold text-white">
              I
            </div>
            <div>
              <p className="serif-display text-lg font-semibold leading-none">
                {session.full_name || session.username}
              </p>
              <p className="text-[11px] text-white/60">IELTS Prep Program</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        {currentDay <= TOTAL_DAYS ? (
          <>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-teal)]">
                Day {currentDay} / {TOTAL_DAYS}
              </p>
              <h1 className="serif-display mt-1 text-2xl font-semibold text-[var(--color-navy)]">
                Complete today&apos;s tasks
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Once everything is done, the next day will unlock.
              </p>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => {
                const Icon = task.icon;
                const done = todayProgress
                  ? Boolean(todayProgress[task.key as keyof DailyProgress])
                  : false;
                return (
                  <Link
                    key={task.key}
                    href={task.href}
                    className={`flex items-center justify-between rounded-lg border p-4 transition-colors ${
                      done
                        ? "border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5"
                        : "border-[var(--color-line)] bg-white hover:border-[var(--color-teal)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-md ${
                          done
                            ? "bg-[var(--color-teal)] text-white"
                            : "bg-[var(--color-navy)]/8 text-[var(--color-navy)]"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-medium text-[var(--color-ink)]">{task.label}</span>
                    </div>
                    {done ? (
                      <CheckCircle2 size={20} className="text-[var(--color-teal)]" />
                    ) : (
                      <Circle size={20} className="text-neutral-300" />
                    )}
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <div className="rounded-lg border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5 p-6 text-center">
            <CheckCircle2 size={32} className="mx-auto mb-2 text-[var(--color-teal)]" />
            <p className="serif-display text-lg font-semibold text-[var(--color-navy)]">
              You&apos;ve completed all daily tasks!
            </p>
            <p className="mt-1 text-sm text-neutral-600">You can now move on to the Mock Test.</p>
          </div>
        )}

        {/* Practice Tools - har doim ochiq, kunlik vazifa emas */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Practice Tools
          </p>
          <div className="space-y-2">
            <Link
              href="/word-bank"
              className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-teal)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                  <BookMarked size={18} />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Word Bank</p>
                  <p className="text-sm text-neutral-500">
                    Words saved from Reading passages
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/grammar"
              className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-teal)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                  <SpellCheck size={18} />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Grammar</p>
                  <p className="text-sm text-neutral-500">
                    30 lessons, zero to Elementary level
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/typing"
              className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-teal)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                  <Keyboard size={18} />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Typing Practice</p>
                  <p className="text-sm text-neutral-500">
                    Improve your typing speed for the CD exam
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mock test section - locked/unlocked state */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Mock Exam
          </p>
          {isMockUnlocked ? (
            <Link
              href="/mock"
              className="flex items-center justify-between rounded-lg border border-[var(--color-teal)] bg-white p-5 transition-colors hover:bg-[var(--color-teal)]/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-teal)] text-white">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="serif-display font-semibold text-[var(--color-navy)]">
                    Go to Mock Test
                  </p>
                  <p className="text-sm text-neutral-500">
                    Listening, Reading, Writing, Speaking
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-3 rounded-lg border border-dashed border-[var(--color-line)] bg-[var(--color-paper-dim)] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-neutral-200 text-neutral-400">
                <Lock size={18} />
              </div>
              <div>
                <p className="font-medium text-neutral-500">Mock test is currently locked</p>
                <p className="text-sm text-neutral-400">
                  Unlocks after completing all {TOTAL_DAYS} days of tasks
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
