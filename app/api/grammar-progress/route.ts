import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json({ error: "studentId kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("grammar_progress")
    .select("*")
    .eq("student_id", studentId);

  if (error) {
    return NextResponse.json({ error: "Progress yuklashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data || []);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { studentId, dayNumber, score, totalQuestions } = body;

  if (!studentId || !dayNumber) {
    return NextResponse.json({ error: "studentId va dayNumber kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("grammar_progress")
    .upsert(
      {
        student_id: studentId,
        day_number: dayNumber,
        score,
        total_questions: totalQuestions,
        completed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "student_id,day_number" }
    )
    .select()
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "Saqlashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data);
}
