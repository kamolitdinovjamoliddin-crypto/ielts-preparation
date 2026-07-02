-- ===================================================================
-- IELTS Platform - Database Schema
-- Bu skriptni Supabase SQL Editor'da to'liq ishga tushiring
-- ===================================================================

-- 1) O'QUVCHILAR jadvali
-- Har bir o'quvchi uchun login (username), parol, hozirgi kun va mock holati
create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password text not null, -- oddiy matn sifatida saqlanadi (admin tomonidan beriladi, murakkab auth tizimi emas)
  full_name text,
  current_day int not null default 1,
  mock_unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

-- 2) KUNLIK VAZIFALAR jadvali
-- Har bir kun uchun: Essential Words sahifasi, Writing mavzusi, Reading matni, Podcast/Listening skripti
create table if not exists daily_tasks (
  day_number int primary key,
  title text not null,

  -- Essential Words
  words_page_title text,      -- masalan "Unit 1: Education"
  words_content jsonb,         -- [{word: "...", meaning: "...", example: "..."}, ...]

  -- Writing mashqi
  writing_prompt text,
  writing_min_words int default 50,

  -- Reading mashqi (kichik passage)
  reading_title text,
  reading_text text,
  reading_questions jsonb,     -- [{id, text, options, correctAnswer}, ...]

  -- Listening / Podcast mashqi
  podcast_title text,
  podcast_transcript text,     -- TTS orqali ovozga aylantiriladigan matn
  podcast_questions jsonb,

  -- Dictation (eshitib yozish) mashqi
  dictation_text text,        -- foydalanuvchi tinglab, aynan shu matnni yozishi kerak

  created_at timestamptz not null default now()
);

-- 3) KUNLIK PROGRESS jadvali
-- Har bir o'quvchining har bir kun bo'yicha holati
create table if not exists daily_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  day_number int not null references daily_tasks(day_number),

  words_done boolean not null default false,
  writing_done boolean not null default false,
  reading_done boolean not null default false,
  listening_done boolean not null default false,
  dictation_done boolean not null default false,

  writing_answer text,
  reading_score int,
  listening_score int,
  dictation_answer text,
  dictation_accuracy numeric,

  completed_at timestamptz,
  updated_at timestamptz not null default now(),

  unique(student_id, day_number)
);

-- 4) MOCK TEST NATIJALARI jadvali (eski tizimdan ko'chirildi, endi markazlashtirilgan)
create table if not exists test_results (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  module text not null, -- 'listening' | 'reading' | 'writing' | 'speaking'
  test_title text,
  band_score numeric,
  score int,
  total_questions int,
  feedback jsonb,
  duration_seconds int,
  created_at timestamptz not null default now()
);

-- ===================================================================
-- Row Level Security (RLS) - xavfsizlik qoidalari
-- Bu o'quvchilar faqat o'z ma'lumotlarini ko'ra olishini ta'minlaydi,
-- lekin chunki bizda oddiy login tizimi (Supabase Auth emas), hozircha
-- publishable key orqali o'qish/yozishga ruxsat beramiz, faqat
-- maxsus funksiyalar orqali boshqariladi.
-- ===================================================================

alter table students enable row level security;
alter table daily_tasks enable row level security;
alter table daily_progress enable row level security;
alter table test_results enable row level security;

-- daily_tasks - hamma o'qiy oladi (bu ochiq kontent, lekin yozolmaydi)
create policy "Anyone can read daily_tasks" on daily_tasks
  for select using (true);

-- students - faqat login funksiyasi orqali tekshiriladi (ilova darajasida boshqariladi)
create policy "Allow read for login check" on students
  for select using (true);

-- daily_progress - o'quvchi o'z progressini o'qiy/yoza oladi (ilova darajasida student_id tekshiriladi)
create policy "Allow read progress" on daily_progress
  for select using (true);
create policy "Allow insert progress" on daily_progress
  for insert with check (true);
create policy "Allow update progress" on daily_progress
  for update using (true);

-- test_results - o'quvchi natijalarini yoza/o'qiy oladi
create policy "Allow read results" on test_results
  for select using (true);
create policy "Allow insert results" on test_results
  for insert with check (true);

-- ===================================================================
-- TAYYOR! Endi 8 kunlik namuna kontent qo'shamiz (keyingi skriptda)
-- ===================================================================
