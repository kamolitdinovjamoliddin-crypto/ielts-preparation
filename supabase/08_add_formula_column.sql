-- ===================================================================
-- grammar_lessons jadvaliga formula maydonlarini qo'shish
-- ===================================================================

alter table grammar_lessons add column if not exists formula jsonb default '[]'::jsonb;
alter table grammar_lessons add column if not exists formula_labels jsonb default '[]'::jsonb;
