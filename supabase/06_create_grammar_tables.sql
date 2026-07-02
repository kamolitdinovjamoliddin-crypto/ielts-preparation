-- ===================================================================
-- IELTS Platform - grammar_lessons jadvali
-- 30 kunlik Grammar dasturi (0 dan Elementary darajagacha)
-- ===================================================================

create table if not exists grammar_lessons (
  day_number int primary key,
  title text not null,              -- masalan "To Be (am/is/are)"
  explanation text not null,        -- qoida tushuntirish (matn, paragraflar \n\n bilan ajratilgan)
  examples jsonb not null,          -- [{sentence: "...", note: "..."}, ...]
  questions jsonb not null,         -- [{id, type, text, options, correctAnswer}, ...]
  created_at timestamptz not null default now()
);

alter table grammar_lessons enable row level security;

create policy "Anyone can read grammar_lessons" on grammar_lessons
  for select using (true);

-- Har bir o'quvchining grammar progressini kuzatish uchun
create table if not exists grammar_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  day_number int not null references grammar_lessons(day_number),
  score int,
  total_questions int,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique(student_id, day_number)
);

alter table grammar_progress enable row level security;

create policy "Allow read grammar_progress" on grammar_progress
  for select using (true);
create policy "Allow insert grammar_progress" on grammar_progress
  for insert with check (true);
create policy "Allow update grammar_progress" on grammar_progress
  for update using (true);
