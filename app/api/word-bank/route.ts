import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET: o'quvchining saqlangan so'zlarini olish
export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "studentId kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("saved_words")
    .select("*")
    .eq("student_id", studentId)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Yuklashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data || []);
}

// POST: yangi so'z qo'shish
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { studentId, word, source } = body;

  if (!studentId || !word) {
    return NextResponse.json({ error: "studentId va word kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("saved_words")
    .upsert(
      {
        student_id: studentId,
        word: word.trim().toLowerCase(),
        context_sentence: source || null,
        is_learned: false,
      },
      { onConflict: "student_id,word" }
    )
    .select()
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "Saqlashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data);
}

// PATCH: so'zni "learned" deb belgilash
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { studentId, word, isLearned } = body;

  if (!studentId || !word) {
    return NextResponse.json({ error: "studentId va word kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("saved_words")
    .update({ is_learned: isLearned })
    .eq("student_id", studentId)
    .eq("word", word)
    .select()
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "Yangilashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE: so'zni o'chirish
export async function DELETE(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  const word = req.nextUrl.searchParams.get("word");

  if (!studentId || !word) {
    return NextResponse.json({ error: "studentId va word kerak" }, { status: 400 });
  }

  const { error } = await supabase
    .from("saved_words")
    .delete()
    .eq("student_id", studentId)
    .eq("word", word);

  if (error) {
    return NextResponse.json({ error: "O'chirishda xatolik" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
