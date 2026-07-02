import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/daily-progress?studentId=...&dayNumber=...
// Agar dayNumber berilmasa, o'quvchining barcha kunlar progressini qaytaradi
export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  const dayNumber = req.nextUrl.searchParams.get("dayNumber");

  if (!studentId) {
    return NextResponse.json({ error: "studentId kerak" }, { status: 400 });
  }

  

  let query = supabase.from("daily_progress").select("*").eq("student_id", studentId);
  if (dayNumber) {
    query = query.eq("day_number", Number(dayNumber));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/daily-progress
// Body: { studentId, dayNumber, field, value, answer? }
// field: "words_done" | "writing_done" | "reading_done" | "listening_done" | "dictation_done"
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { studentId, dayNumber, updates } = body;

    if (!studentId || !dayNumber || !updates) {
      return NextResponse.json({ error: "studentId, dayNumber, updates kerak" }, { status: 400 });
    }

    

    // Avval mavjud yozuvni tekshiramiz
    const { data: existing } = await supabase
      .from("daily_progress")
      .select("id")
      .eq("student_id", studentId)
      .eq("day_number", dayNumber)
      .maybeSingle();

    let result;
    if (existing) {
      result = await supabase
        .from("daily_progress")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", existing.id)
        .select()
        .single();
    } else {
      result = await supabase
        .from("daily_progress")
        .insert({ student_id: studentId, day_number: dayNumber, ...updates })
        .select()
        .single();
    }

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    // Agar kunning hammasi tugagan bo'lsa, current_day ni oshiramiz / mock_unlocked ni yoqamiz
    const progress = result.data;
    const isComplete =
      progress.words_done &&
      progress.writing_done &&
      progress.reading_done &&
      progress.listening_done &&
      progress.dictation_done;

    if (isComplete) {
      const { data: student } = await supabase
        .from("students")
        .select("current_day")
        .eq("id", studentId)
        .single();

      if (student && student.current_day === dayNumber) {
        const { count } = await supabase
          .from("daily_tasks")
          .select("day_number", { count: "exact", head: true });

        const totalDays = count || 30;
        const nextDay = dayNumber + 1;

        if (nextDay > totalDays) {
          // Hamma kunlar tugadi - mockni ochamiz
          await supabase
            .from("students")
            .update({ mock_unlocked: true, current_day: nextDay })
            .eq("id", studentId);
        } else {
          await supabase.from("students").update({ current_day: nextDay }).eq("id", studentId);
        }
      }
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Daily progress error:", error);
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}
