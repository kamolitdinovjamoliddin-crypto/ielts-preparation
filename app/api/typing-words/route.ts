import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const upToDay = req.nextUrl.searchParams.get("upToDay");

  if (!upToDay) {
    return NextResponse.json({ error: "upToDay kerak" }, { status: 400 });
  }

  // O'quvchi hozirgi kunigacha (current_day) o'rgangan barcha so'zlarni olamiz.
  // Agar o'quvchi 1-kunda bo'lsa ham, hech bo'lmasa 1-kun so'zlarini ko'rsatamiz.
  const maxDay = Math.max(1, Number(upToDay));

  const { data, error } = await supabase
    .from("word_entries")
    .select("word")
    .lte("day_number", maxDay);

  if (error) {
    return NextResponse.json({ error: "So'zlarni yuklashda xatolik" }, { status: 500 });
  }

  const words = (data || []).map((row) => row.word);

  return NextResponse.json({ words });
}
