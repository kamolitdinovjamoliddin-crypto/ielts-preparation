"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/session";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "denied-no-session" | "denied-locked" | "allowed">(
    "loading"
  );

  useEffect(() => {
    async function check() {
      const session = getSession();
      if (!session) {
        router.replace("/login");
        return;
      }

      // Check the latest mock_unlocked status from the server
      // (the cached session might be outdated)
      try {
        const res = await fetch(`/api/student-status?studentId=${session.id}`);
        const data = await res.json();

        if (!data.mock_unlocked) {
          setStatus("denied-locked");
          return;
        }

        setStatus("allowed");
      } catch {
        setStatus("denied-locked");
      }
    }
    check();
  }, [router]);

  if (status === "loading") {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (status === "denied-locked") {
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
            You need to complete all your daily tasks before accessing this section.
          </p>
          <Link
            href="/dashboard"
            className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-teal)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
          >
            Back to Daily Tasks
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
