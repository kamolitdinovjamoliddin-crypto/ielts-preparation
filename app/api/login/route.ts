import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Login va parol kiritilishi shart." }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("students")
      .select("id, username, password, full_name, current_day, mock_unlocked")
      .eq("username", username.trim())
      .maybeSingle();

    if (error) {
      console.error("Login query error:", error);
      return NextResponse.json({ error: "Server xatosi yuz berdi." }, { status: 500 });
    }

    if (!data || data.password !== password) {
      return NextResponse.json({ error: "Login yoki parol noto'g'ri." }, { status: 401 });
    }

    return NextResponse.json({
      id: data.id,
      username: data.username,
      full_name: data.full_name,
      current_day: data.current_day,
      mock_unlocked: data.mock_unlocked,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Tizimda xatolik yuz berdi." }, { status: 500 });
  }
}
