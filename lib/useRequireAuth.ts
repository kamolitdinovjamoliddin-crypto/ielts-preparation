"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/session";
import { StudentSession } from "@/lib/dbTypes";

export function useRequireAuth(): StudentSession | null | undefined {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null | undefined>(undefined);

  useEffect(() => {
    const s = getSession();
    if (!s) {
      router.replace("/login");
      return;
    }
    setSession(s);
  }, [router]);

  return session;
}
