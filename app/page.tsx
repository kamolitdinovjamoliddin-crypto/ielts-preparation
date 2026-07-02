"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/session";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (session) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="exam-shell flex min-h-screen items-center justify-center">
      <p className="text-neutral-400">Yuklanmoqda...</p>
    </div>
  );
}
