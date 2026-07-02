-- Grammar formulalarini barcha 30 kunga qo'shish
-- Avval 08_add_formula_column.sql ishga tushirilgan bo'lishi kerak

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are", "label": "Verb (to be)", "color": "green"}, {"part": "Complement", "label": "Adjective/Noun", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are + not", "label": "Verb + not", "color": "red"}, {"part": "Complement", "label": "Adjective/Noun", "color": "amber"}], [{"part": "Am/Is/Are", "label": "Verb (to be)", "color": "green"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "Complement?", "label": "Adjective/Noun", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative", "Negative", "Question"]'::jsonb
WHERE day_number = 1;

UPDATE grammar_lessons SET
  formula = '[[{"part": "I/You/He/She/It/We/They", "label": "Subject Pronoun", "color": "blue"}, {"part": "Verb", "label": "Action", "color": "green"}]]'::jsonb,
  formula_labels = '["Subject pronoun + verb"]'::jsonb
WHERE day_number = 2;

UPDATE grammar_lessons SET
  formula = '[[{"part": "a/an", "label": "Article", "color": "purple"}, {"part": "Noun", "label": "Singular Noun", "color": "amber"}], [{"part": "the", "label": "Article", "color": "purple"}, {"part": "Noun", "label": "Specific Noun", "color": "amber"}]]'::jsonb,
  formula_labels = '["Indefinite (first mention)", "Definite (specific)"]'::jsonb
WHERE day_number = 3;

UPDATE grammar_lessons SET
  formula = '[[{"part": "Noun", "label": "Singular", "color": "amber"}, {"part": "+ -s / -es", "label": "Plural Ending", "color": "green"}]]'::jsonb,
  formula_labels = '["Regular plural"]'::jsonb
WHERE day_number = 4;

UPDATE grammar_lessons SET
  formula = '[[{"part": "This", "label": "Near + Singular", "color": "blue"}, {"part": "is", "label": "Verb", "color": "green"}, {"part": "Noun", "label": "Object", "color": "amber"}], [{"part": "Those", "label": "Far + Plural", "color": "blue"}, {"part": "are", "label": "Verb", "color": "green"}, {"part": "Noun (plural)", "label": "Object", "color": "amber"}]]'::jsonb,
  formula_labels = '["Near, singular", "Far, plural"]'::jsonb
WHERE day_number = 5;

UPDATE grammar_lessons SET
  formula = '[[{"part": "my/your/his/her/its/our/their", "label": "Possessive Adjective", "color": "blue"}, {"part": "Noun", "label": "Thing owned", "color": "amber"}]]'::jsonb,
  formula_labels = '["Possessive"]'::jsonb
WHERE day_number = 6;

UPDATE grammar_lessons SET
  formula = '[[{"part": "Noun (owner)", "label": "Owner", "color": "blue"}, {"part": "''s", "label": "Apostrophe S", "color": "purple"}, {"part": "Noun (thing)", "label": "Thing owned", "color": "amber"}], [{"part": "Noun-s (owner)", "label": "Owner (plural)", "color": "blue"}, {"part": "''", "label": "Apostrophe only", "color": "purple"}, {"part": "Noun (thing)", "label": "Thing owned", "color": "amber"}]]'::jsonb,
  formula_labels = '["Singular owner", "Plural owner (ends in -s)"]'::jsonb
WHERE day_number = 7;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "V (base)", "label": "Verb base form", "color": "green"}, {"part": "Object", "label": "Object", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "V + s/es", "label": "Verb + s", "color": "green"}, {"part": "Object", "label": "Object", "color": "amber"}]]'::jsonb,
  formula_labels = '["I/You/We/They", "He/She/It"]'::jsonb
WHERE day_number = 8;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "don''t/doesn''t", "label": "Auxiliary + not", "color": "red"}, {"part": "V (base)", "label": "Verb base form", "color": "green"}], [{"part": "Do/Does", "label": "Auxiliary", "color": "purple"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "V (base)?", "label": "Verb base form", "color": "green"}]]'::jsonb,
  formula_labels = '["Negative", "Question"]'::jsonb
WHERE day_number = 9;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "always/usually/often...", "label": "Adverb of Frequency", "color": "purple"}, {"part": "V", "label": "Main Verb", "color": "green"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are", "label": "To Be", "color": "green"}, {"part": "always/usually/often...", "label": "Adverb of Frequency", "color": "purple"}]]'::jsonb,
  formula_labels = '["With main verb", "With ''to be''"]'::jsonb
WHERE day_number = 10;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are", "label": "To Be", "color": "green"}, {"part": "V-ing", "label": "Verb + ing", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are + not", "label": "To Be + not", "color": "red"}, {"part": "V-ing", "label": "Verb + ing", "color": "amber"}], [{"part": "Am/Is/Are", "label": "To Be", "color": "green"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "V-ing?", "label": "Verb + ing", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative", "Negative", "Question"]'::jsonb
WHERE day_number = 11;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "V(-s)", "label": "Verb base/with s", "color": "green"}, {"part": "always/every day...", "label": "Time marker", "color": "purple"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are + V-ing", "label": "To Be + Verb-ing", "color": "green"}, {"part": "now/right now...", "label": "Time marker", "color": "purple"}]]'::jsonb,
  formula_labels = '["Simple (habit/fact)", "Continuous (now)"]'::jsonb
WHERE day_number = 12;

UPDATE grammar_lessons SET
  formula = '[[{"part": "There is", "label": "Existence (singular)", "color": "green"}, {"part": "a/an + Noun", "label": "Subject", "color": "amber"}], [{"part": "There are", "label": "Existence (plural)", "color": "green"}, {"part": "Noun (plural)", "label": "Subject", "color": "amber"}]]'::jsonb,
  formula_labels = '["Singular", "Plural"]'::jsonb
WHERE day_number = 13;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S + Verb (to be)", "label": "Subject + Verb", "color": "blue"}, {"part": "in/on/at/under/behind...", "label": "Preposition", "color": "purple"}, {"part": "Place", "label": "Location", "color": "amber"}]]'::jsonb,
  formula_labels = '["Location"]'::jsonb
WHERE day_number = 14;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "can", "label": "Modal Verb", "color": "green"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "can''t / cannot", "label": "Modal + not", "color": "red"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}], [{"part": "Can", "label": "Modal Verb", "color": "green"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "V (base)?", "label": "Verb base form", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative", "Negative", "Question"]'::jsonb
WHERE day_number = 15;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "was/were", "label": "To Be (past)", "color": "green"}, {"part": "Complement", "label": "Adjective/Noun", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "wasn''t/weren''t", "label": "To Be (past) + not", "color": "red"}, {"part": "Complement", "label": "Adjective/Noun", "color": "amber"}], [{"part": "Was/Were", "label": "To Be (past)", "color": "green"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "Complement?", "label": "Adjective/Noun", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative", "Negative", "Question"]'::jsonb
WHERE day_number = 16;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "V + ed", "label": "Verb + ed", "color": "green"}, {"part": "Object", "label": "Object", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative (all subjects)"]'::jsonb
WHERE day_number = 17;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "V2", "label": "Irregular Past Form", "color": "green"}, {"part": "Object", "label": "Object", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative (all subjects)"]'::jsonb
WHERE day_number = 18;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "didn''t", "label": "Auxiliary + not", "color": "red"}, {"part": "V (base)", "label": "Verb base form", "color": "green"}], [{"part": "Did", "label": "Auxiliary", "color": "purple"}, {"part": "S", "label": "Subject", "color": "blue"}, {"part": "V (base)?", "label": "Verb base form", "color": "green"}]]'::jsonb,
  formula_labels = '["Negative", "Question"]'::jsonb
WHERE day_number = 19;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "was/were", "label": "To Be (past)", "color": "green"}, {"part": "V-ing", "label": "Verb + ing", "color": "amber"}], [{"part": "While + S + was/were + V-ing", "label": "Longer action", "color": "purple"}, {"part": ",", "label": "", "color": "purple"}, {"part": "S + V2", "label": "Shorter action (Past Simple)", "color": "green"}]]'::jsonb,
  formula_labels = '["Affirmative", "With interruption"]'::jsonb
WHERE day_number = 20;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S + Verb", "label": "Subject + Verb", "color": "blue"}, {"part": "in/on/at", "label": "Preposition", "color": "purple"}, {"part": "Time", "label": "Time expression", "color": "amber"}]]'::jsonb,
  formula_labels = '["Time"]'::jsonb
WHERE day_number = 21;

UPDATE grammar_lessons SET
  formula = '[[{"part": "Adjective", "label": "Base Adjective", "color": "blue"}, {"part": "+ -ly", "label": "Adverb Ending", "color": "green"}]]'::jsonb,
  formula_labels = '["Formation"]'::jsonb
WHERE day_number = 22;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S1", "label": "Subject 1", "color": "blue"}, {"part": "is", "label": "Verb", "color": "green"}, {"part": "adjective + er", "label": "Comparative", "color": "amber"}, {"part": "than", "label": "Compare word", "color": "purple"}, {"part": "S2", "label": "Subject 2", "color": "blue"}], [{"part": "S1", "label": "Subject 1", "color": "blue"}, {"part": "is", "label": "Verb", "color": "green"}, {"part": "more + adjective", "label": "Comparative", "color": "amber"}, {"part": "than", "label": "Compare word", "color": "purple"}, {"part": "S2", "label": "Subject 2", "color": "blue"}]]'::jsonb,
  formula_labels = '["Short adjectives", "Long adjectives"]'::jsonb
WHERE day_number = 23;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "is the", "label": "Verb + the", "color": "green"}, {"part": "adjective + est", "label": "Superlative", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "is the", "label": "Verb + the", "color": "green"}, {"part": "most + adjective", "label": "Superlative", "color": "amber"}]]'::jsonb,
  formula_labels = '["Short adjectives", "Long adjectives"]'::jsonb
WHERE day_number = 24;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "am/is/are going to", "label": "To Be + going to", "color": "green"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative"]'::jsonb
WHERE day_number = 25;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "will", "label": "Modal Verb", "color": "green"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "won''t", "label": "Modal + not", "color": "red"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}]]'::jsonb,
  formula_labels = '["Affirmative", "Negative"]'::jsonb
WHERE day_number = 26;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S", "label": "Subject", "color": "blue"}, {"part": "must / have to", "label": "Strong Obligation", "color": "green"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}], [{"part": "S", "label": "Subject", "color": "blue"}, {"part": "should", "label": "Advice", "color": "green"}, {"part": "V (base)", "label": "Verb base form", "color": "amber"}]]'::jsonb,
  formula_labels = '["Obligation", "Advice"]'::jsonb
WHERE day_number = 27;

UPDATE grammar_lessons SET
  formula = '[[{"part": "S + Verb", "label": "Subject + Verb", "color": "blue"}, {"part": "me/you/him/her/it/us/them", "label": "Object Pronoun", "color": "amber"}]]'::jsonb,
  formula_labels = '["Object position"]'::jsonb
WHERE day_number = 28;

UPDATE grammar_lessons SET
  formula = '[[{"part": "Clause 1", "label": "First idea", "color": "blue"}, {"part": "and/but/because/so", "label": "Conjunction", "color": "purple"}, {"part": "Clause 2", "label": "Second idea", "color": "amber"}]]'::jsonb,
  formula_labels = '["Joining clauses"]'::jsonb
WHERE day_number = 29;

UPDATE grammar_lessons SET
  formula = '[[{"part": "many/a few/some/any", "label": "Quantifier", "color": "purple"}, {"part": "Noun (plural)", "label": "Countable Noun", "color": "amber"}], [{"part": "much/a little/some/any", "label": "Quantifier", "color": "purple"}, {"part": "Noun (uncountable)", "label": "Uncountable Noun", "color": "amber"}]]'::jsonb,
  formula_labels = '["Countable nouns", "Uncountable nouns"]'::jsonb
WHERE day_number = 30;
