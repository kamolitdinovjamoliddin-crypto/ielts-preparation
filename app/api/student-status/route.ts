import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json({ error: "studentId kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("students")
    .select("current_day, mock_unlocked, full_name")
    .eq("id", studentId)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "O'quvchi topilmadi" }, { status: 404 });
  }

  return NextResponse.json(data);
}
