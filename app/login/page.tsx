"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession } from "@/lib/session";
import { Loader2, LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setIsLoading(false);
        return;
      }

      saveSession({
        id: data.id,
        username: data.username,
        full_name: data.full_name,
        current_day: data.current_day,
        mock_unlocked: data.mock_unlocked,
      });
      router.push("/dashboard");
    } catch {
      setError("Network error. Please check your internet connection.");
      setIsLoading(false);
    }
  }

  return (
    <div className="exam-shell flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border border-[var(--color-line)] bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-navy)] font-serif text-xl font-bold text-white">
            I
          </div>
          <h1 className="serif-display text-xl font-semibold text-[var(--color-navy)]">
            IELTS Prep Platform
          </h1>
          <p className="mt-1 text-sm text-neutral-500">Sign in to continue your progress</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
              className="w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-sm focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-sm focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20"
            />
          </div>

          {error && <p className="text-sm text-[var(--color-red)]">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-60"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-neutral-400">
          Don&apos;t have a login? Contact your teacher.
        </p>
      </div>
    </div>
  );
}
