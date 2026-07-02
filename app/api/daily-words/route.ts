import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const dayNumber = req.nextUrl.searchParams.get("dayNumber");

  if (!dayNumber) {
    return NextResponse.json({ error: "dayNumber kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("word_entries")
    .select("*")
    .eq("day_number", Number(dayNumber))
    .order("word", { ascending: true });

  if (error) {
    return NextResponse.json({ error: "So'zlarni yuklashda xatolik" }, { status: 500 });
  }

  return NextResponse.json(data || []);
}
