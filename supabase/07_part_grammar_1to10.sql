-- Grammar Lessons - Kunlar 1-10
-- Avval 06_create_grammar_tables.sql ishga tushirilgan bo'lishi kerak

DELETE FROM grammar_lessons WHERE day_number BETWEEN 1 AND 10;

INSERT INTO grammar_lessons (day_number, title, explanation, examples, questions) VALUES
(
  1,
  'To Be (am / is / are)',
  'The verb ''to be'' is one of the most important verbs in English. It has three forms in the present: am, is, and are.

Use ''am'' with I.
Use ''is'' with he, she, it, and singular nouns.
Use ''are'' with you, we, they, and plural nouns.

To make a negative sentence, add ''not'' after the verb: am not, is not (isn''t), are not (aren''t).

To make a question, put the verb before the subject: Am I...? Is he...? Are you...?',
  '[{"sentence": "I am a student.", "note": "I + am"}, {"sentence": "She is from Tashkent.", "note": "She + is"}, {"sentence": "They are my friends.", "note": "They + are"}, {"sentence": "He is not happy today.", "note": "negative: is not = isn''t"}, {"sentence": "Are you ready?", "note": "question: Are + you"}]'::jsonb,
  '[{"id": "g1q1", "type": "multiple-choice", "text": "I ___ a teacher.", "options": ["am", "is", "are"], "correctAnswer": "am"}, {"id": "g1q2", "type": "multiple-choice", "text": "She ___ my sister.", "options": ["am", "is", "are"], "correctAnswer": "is"}, {"id": "g1q3", "type": "multiple-choice", "text": "We ___ from Uzbekistan.", "options": ["am", "is", "are"], "correctAnswer": "are"}, {"id": "g1q4", "type": "multiple-choice", "text": "It ___ a nice day.", "options": ["am", "is", "are"], "correctAnswer": "is"}, {"id": "g1q5", "type": "fill-blank", "text": "They ___ (be) at home now.", "correctAnswer": ["are"]}, {"id": "g1q6", "type": "fill-blank", "text": "He ___ (be, negative) at school today.", "correctAnswer": ["is not", "isn''t"]}, {"id": "g1q7", "type": "multiple-choice", "text": "Which question is correct?", "options": ["Is you ready?", "Are you ready?", "Am you ready?"], "correctAnswer": "Are you ready?"}, {"id": "g1q8", "type": "multiple-choice", "text": "You ___ very kind.", "options": ["am", "is", "are"], "correctAnswer": "are"}, {"id": "g1q9", "type": "fill-blank", "text": "I ___ not tired.", "correctAnswer": ["am"]}, {"id": "g1q10", "type": "multiple-choice", "text": "My parents ___ doctors.", "options": ["am", "is", "are"], "correctAnswer": "are"}]'::jsonb
),
(
  2,
  'Personal Pronouns (I, you, he, she, it, we, they)',
  'Personal pronouns replace nouns so we don''t repeat names. 

I = the speaker. You = the listener. He = a male person. She = a female person. It = a thing or animal. We = the speaker and others. They = other people or things.

We use these pronouns as the subject of a sentence, before the verb.',
  '[{"sentence": "John is tired. He wants to sleep.", "note": "He replaces John"}, {"sentence": "Maria is my friend. She lives near me.", "note": "She replaces Maria"}, {"sentence": "The book is on the table. It is blue.", "note": "It replaces the book"}, {"sentence": "My brother and I are happy. We are happy.", "note": "We replaces ''my brother and I''"}, {"sentence": "Tom and Anna are students. They study English.", "note": "They replaces ''Tom and Anna''"}]'::jsonb,
  '[{"id": "g2q1", "type": "multiple-choice", "text": "Peter is my friend. ___ is very funny.", "options": ["He", "She", "It"], "correctAnswer": "He"}, {"id": "g2q2", "type": "multiple-choice", "text": "Sara is a doctor. ___ works at a hospital.", "options": ["He", "She", "They"], "correctAnswer": "She"}, {"id": "g2q3", "type": "multiple-choice", "text": "My cat is small. ___ likes to play.", "options": ["He", "It", "She"], "correctAnswer": "It"}, {"id": "g2q4", "type": "multiple-choice", "text": "My friends and I are at school. ___ are studying.", "options": ["They", "We", "You"], "correctAnswer": "We"}, {"id": "g2q5", "type": "fill-blank", "text": "Ali and Vali are brothers. ___ live together.", "correctAnswer": ["They"]}, {"id": "g2q6", "type": "multiple-choice", "text": "Excuse me, Mr. Smith, are ___ busy?", "options": ["you", "he", "they"], "correctAnswer": "you"}, {"id": "g2q7", "type": "fill-blank", "text": "___ am from Bukhara.", "correctAnswer": ["I"]}, {"id": "g2q8", "type": "multiple-choice", "text": "The children are playing. ___ are happy.", "options": ["It", "They", "He"], "correctAnswer": "They"}, {"id": "g2q9", "type": "fill-blank", "text": "This is my mother. ___ is a kind person.", "correctAnswer": ["She"]}, {"id": "g2q10", "type": "multiple-choice", "text": "My dog and I go for a walk every day. ___ enjoy it.", "options": ["We", "They", "It"], "correctAnswer": "We"}]'::jsonb
),
(
  3,
  'Articles: a, an, the',
  'We use ''a'' and ''an'' before singular, countable nouns when we mention something for the first time, or when it isn''t specific.

Use ''a'' before a consonant sound: a book, a car, a university.
Use ''an'' before a vowel sound: an apple, an hour, an idea.

We use ''the'' when we talk about a specific thing, something already mentioned, or something unique (like the sun, the moon).

We usually don''t use an article with plural nouns in general statements, or with most proper names.',
  '[{"sentence": "I have a dog.", "note": "a + consonant sound"}, {"sentence": "She is an engineer.", "note": "an + vowel sound"}, {"sentence": "I saw a man. The man was tall.", "note": "second mention uses ''the''"}, {"sentence": "The sun rises in the east.", "note": "unique thing: the sun"}, {"sentence": "Cats are independent animals.", "note": "no article for general plural statement"}]'::jsonb,
  '[{"id": "g3q1", "type": "multiple-choice", "text": "I bought ___ apple at the market.", "options": ["a", "an", "the"], "correctAnswer": "an"}, {"id": "g3q2", "type": "multiple-choice", "text": "She is ___ teacher.", "options": ["a", "an", "the"], "correctAnswer": "a"}, {"id": "g3q3", "type": "multiple-choice", "text": "Look at ___ moon tonight!", "options": ["a", "an", "the"], "correctAnswer": "the"}, {"id": "g3q4", "type": "multiple-choice", "text": "I need ___ hour to finish this.", "options": ["a", "an", "the"], "correctAnswer": "an"}, {"id": "g3q5", "type": "fill-blank", "text": "There is ___ cat in the garden.", "correctAnswer": ["a"]}, {"id": "g3q6", "type": "multiple-choice", "text": "He works at ___ university near here.", "options": ["a", "an", "the"], "correctAnswer": "a"}, {"id": "g3q7", "type": "fill-blank", "text": "Can you close ___ door, please?", "correctAnswer": ["the"]}, {"id": "g3q8", "type": "multiple-choice", "text": "___ elephants are very intelligent animals.", "options": ["A", "An", "(no article)"], "correctAnswer": "(no article)"}, {"id": "g3q9", "type": "fill-blank", "text": "I want to buy ___ orange and a banana.", "correctAnswer": ["an"]}, {"id": "g3q10", "type": "multiple-choice", "text": "We visited ___ museum yesterday. ___ museum was huge.", "options": ["a / The", "an / A", "the / A"], "correctAnswer": "a / The"}]'::jsonb
),
(
  4,
  'Singular and Plural Nouns',
  'Most English nouns become plural by adding -s: book -> books, car -> cars.

If a noun ends in -s, -x, -ch, -sh, add -es: bus -> buses, box -> boxes, watch -> watches.

If a noun ends in a consonant + y, change y to i and add -es: city -> cities, baby -> babies.

Some nouns are irregular and don''t follow these rules: man -> men, woman -> women, child -> children, person -> people, foot -> feet, tooth -> teeth.

Some nouns have no plural form at all, like water, information, advice.',
  '[{"sentence": "I have two books.", "note": "book -> books"}, {"sentence": "There are five buses outside.", "note": "bus -> buses"}, {"sentence": "She visited three cities.", "note": "city -> cities"}, {"sentence": "There are many children in the park.", "note": "child -> children (irregular)"}, {"sentence": "Many people like this song.", "note": "person -> people (irregular)"}]'::jsonb,
  '[{"id": "g4q1", "type": "fill-blank", "text": "I have two ___ (book).", "correctAnswer": ["books"]}, {"id": "g4q2", "type": "fill-blank", "text": "There are three ___ (box) on the table.", "correctAnswer": ["boxes"]}, {"id": "g4q3", "type": "fill-blank", "text": "She has many ___ (friend) at school.", "correctAnswer": ["friends"]}, {"id": "g4q4", "type": "multiple-choice", "text": "What is the plural of ''child''?", "options": ["childs", "children", "childes"], "correctAnswer": "children"}, {"id": "g4q5", "type": "multiple-choice", "text": "What is the plural of ''city''?", "options": ["citys", "cities", "cityes"], "correctAnswer": "cities"}, {"id": "g4q6", "type": "fill-blank", "text": "There are many ___ (woman) in this photo.", "correctAnswer": ["women"]}, {"id": "g4q7", "type": "multiple-choice", "text": "What is the plural of ''foot''?", "options": ["foots", "feets", "feet"], "correctAnswer": "feet"}, {"id": "g4q8", "type": "fill-blank", "text": "We saw five ___ (man) at the market.", "correctAnswer": ["men"]}, {"id": "g4q9", "type": "multiple-choice", "text": "Which sentence is correct?", "options": ["I drink two waters.", "I need some information.", "I have two informations."], "correctAnswer": "I need some information."}, {"id": "g4q10", "type": "fill-blank", "text": "There are ten ___ (watch) in the shop.", "correctAnswer": ["watches"]}]'::jsonb
),
(
  5,
  'This, That, These, Those',
  'We use ''this'' and ''that'' to point to one thing (singular). We use ''these'' and ''those'' to point to more than one thing (plural).

''This'' and ''these'' refer to things that are near us.
''That'' and ''those'' refer to things that are far from us.

We can use these words before a noun (this book) or alone, replacing the noun (This is my book).',
  '[{"sentence": "This is my phone.", "note": "near, singular"}, {"sentence": "That is your house, over there.", "note": "far, singular"}, {"sentence": "These are my shoes.", "note": "near, plural"}, {"sentence": "Those are beautiful mountains.", "note": "far, plural"}, {"sentence": "I like this book, not that one.", "note": "comparing near and far"}]'::jsonb,
  '[{"id": "g5q1", "type": "multiple-choice", "text": "___ is my pen. (pointing to something near you, one item)", "options": ["This", "These", "Those"], "correctAnswer": "This"}, {"id": "g5q2", "type": "multiple-choice", "text": "___ are my keys. (near, plural)", "options": ["This", "That", "These"], "correctAnswer": "These"}, {"id": "g5q3", "type": "multiple-choice", "text": "Look at ___ mountains over there. (far, plural)", "options": ["this", "those", "that"], "correctAnswer": "those"}, {"id": "g5q4", "type": "multiple-choice", "text": "___ car, over there, is very old. (far, singular)", "options": ["This", "These", "That"], "correctAnswer": "That"}, {"id": "g5q5", "type": "fill-blank", "text": "___ is my brother. (near, singular)", "correctAnswer": ["This"]}, {"id": "g5q6", "type": "fill-blank", "text": "___ are delicious apples! (near, plural)", "correctAnswer": ["These"]}, {"id": "g5q7", "type": "multiple-choice", "text": "Can I have one of ___ apples? (far, plural)", "options": ["this", "that", "those"], "correctAnswer": "those"}, {"id": "g5q8", "type": "fill-blank", "text": "I don''t like ___ color. (far, singular)", "correctAnswer": ["that"]}, {"id": "g5q9", "type": "multiple-choice", "text": "___ is a difficult question.", "options": ["This", "These", "Those"], "correctAnswer": "This"}, {"id": "g5q10", "type": "fill-blank", "text": "Whose are ___ books on the table near you?", "correctAnswer": ["these"]}]'::jsonb
),
(
  6,
  'Possessive Adjectives (my, your, his, her, its, our, their)',
  'Possessive adjectives show who something belongs to. They come before a noun.

I -> my, You -> your, He -> his, She -> her, It -> its, We -> our, They -> their.

Unlike some other languages, possessive adjectives in English do not change for plural nouns: ''my book'' and ''my books'' both use ''my''.',
  '[{"sentence": "This is my house.", "note": "I -> my"}, {"sentence": "Is this your bag?", "note": "you -> your"}, {"sentence": "He loves his job.", "note": "he -> his"}, {"sentence": "She visited her grandmother.", "note": "she -> her"}, {"sentence": "The cat is eating its food.", "note": "it -> its"}]'::jsonb,
  '[{"id": "g6q1", "type": "multiple-choice", "text": "This is ___ pen. (I)", "options": ["my", "your", "his"], "correctAnswer": "my"}, {"id": "g6q2", "type": "multiple-choice", "text": "Is that ___ car? (you)", "options": ["my", "your", "her"], "correctAnswer": "your"}, {"id": "g6q3", "type": "multiple-choice", "text": "Peter lost ___ keys. (he)", "options": ["his", "her", "its"], "correctAnswer": "his"}, {"id": "g6q4", "type": "multiple-choice", "text": "Maria called ___ mother. (she)", "options": ["his", "her", "their"], "correctAnswer": "her"}, {"id": "g6q5", "type": "fill-blank", "text": "We love ___ new house. (we)", "correctAnswer": ["our"]}, {"id": "g6q6", "type": "fill-blank", "text": "The students did ___ homework. (they)", "correctAnswer": ["their"]}, {"id": "g6q7", "type": "multiple-choice", "text": "The dog wagged ___ tail. (it)", "options": ["its", "his", "her"], "correctAnswer": "its"}, {"id": "g6q8", "type": "fill-blank", "text": "I can''t find ___ phone. (I)", "correctAnswer": ["my"]}, {"id": "g6q9", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["She is doing her homework.", "She is doing its homework.", "She is doing their homework."], "correctAnswer": "She is doing her homework."}, {"id": "g6q10", "type": "fill-blank", "text": "John and Mary love ___ children. (they)", "correctAnswer": ["their"]}]'::jsonb
),
(
  7,
  'Possessive ''s (Apostrophe S)',
  'We use ''s after a singular noun to show possession: the girl''s book (the book belongs to the girl).

For plural nouns ending in -s, we add only an apostrophe: the students'' books.

For irregular plural nouns that don''t end in -s (like children, men, women), we add ''s: the children''s toys.

We do not use ''s for things - instead we usually use ''of'' or just put the noun before another noun: the door of the car, or the car door.',
  '[{"sentence": "This is Anna''s bag.", "note": "singular noun + ''s"}, {"sentence": "The boys'' room is upstairs.", "note": "plural ending in -s + apostrophe only"}, {"sentence": "The children''s playground is closed.", "note": "irregular plural + ''s"}, {"sentence": "My sister''s car is red.", "note": "singular noun + ''s"}, {"sentence": "The teachers'' meeting starts at 5.", "note": "plural ending in -s + apostrophe only"}]'::jsonb,
  '[{"id": "g7q1", "type": "multiple-choice", "text": "This is ___ bike. (Tom)", "options": ["Tom''s", "Toms''", "Toms"], "correctAnswer": "Tom''s"}, {"id": "g7q2", "type": "multiple-choice", "text": "The ___ books are on the table. (students, plural)", "options": ["student''s", "students''", "students"], "correctAnswer": "students''"}, {"id": "g7q3", "type": "multiple-choice", "text": "The ___ toys are everywhere. (children)", "options": ["children''s", "childrens''", "childrens"], "correctAnswer": "children''s"}, {"id": "g7q4", "type": "fill-blank", "text": "This is my ___ house. (sister)", "correctAnswer": ["sister''s"]}, {"id": "g7q5", "type": "fill-blank", "text": "The ___ room is very clean. (boys, plural)", "correctAnswer": ["boys''"]}, {"id": "g7q6", "type": "multiple-choice", "text": "Whose pen is this? It''s ___.", "options": ["Sara''s", "Saras''", "Sara"], "correctAnswer": "Sara''s"}, {"id": "g7q7", "type": "fill-blank", "text": "The ___ office is on the second floor. (manager)", "correctAnswer": ["manager''s"]}, {"id": "g7q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["The dogs'' food is here.", "The dog''s''s food is here.", "The dogs food is here."], "correctAnswer": "The dogs'' food is here."}, {"id": "g7q9", "type": "fill-blank", "text": "Have you seen ___ new phone? (James)", "correctAnswer": ["James''s"]}, {"id": "g7q10", "type": "multiple-choice", "text": "The ___ shoes were left at the door. (women)", "options": ["women''s", "womens''", "womens"], "correctAnswer": "women''s"}]'::jsonb
),
(
  8,
  'Present Simple (Affirmative)',
  'We use the Present Simple for habits, routines, facts, and things that are generally true.

For I, you, we, they, we use the base form of the verb: I work, you play, they live.

For he, she, it, we add -s to the verb: he works, she plays, it lives.

Verbs ending in -ch, -sh, -ss, -x, -o add -es: he watches, she goes.

Verbs ending in consonant + y change y to i and add -es: study -> studies.',
  '[{"sentence": "I work in a bank.", "note": "I + base form"}, {"sentence": "She works in a hospital.", "note": "she + verb-s"}, {"sentence": "He watches TV every evening.", "note": "watch -> watches"}, {"sentence": "They live in Samarkand.", "note": "they + base form"}, {"sentence": "My brother studies English.", "note": "study -> studies"}]'::jsonb,
  '[{"id": "g8q1", "type": "fill-blank", "text": "She ___ (work) at a school.", "correctAnswer": ["works"]}, {"id": "g8q2", "type": "fill-blank", "text": "I ___ (like) tea very much.", "correctAnswer": ["like"]}, {"id": "g8q3", "type": "fill-blank", "text": "He ___ (go) to the gym every day.", "correctAnswer": ["goes"]}, {"id": "g8q4", "type": "fill-blank", "text": "They ___ (play) football on weekends.", "correctAnswer": ["play"]}, {"id": "g8q5", "type": "fill-blank", "text": "My mother ___ (cook) dinner every night.", "correctAnswer": ["cooks"]}, {"id": "g8q6", "type": "multiple-choice", "text": "Which is correct?", "options": ["She studys hard.", "She studies hard.", "She studyes hard."], "correctAnswer": "She studies hard."}, {"id": "g8q7", "type": "fill-blank", "text": "We ___ (live) in a big city.", "correctAnswer": ["live"]}, {"id": "g8q8", "type": "fill-blank", "text": "The shop ___ (open) at nine.", "correctAnswer": ["opens"]}, {"id": "g8q9", "type": "multiple-choice", "text": "Which is correct?", "options": ["He washs his car.", "He washes his car.", "He washies his car."], "correctAnswer": "He washes his car."}, {"id": "g8q10", "type": "fill-blank", "text": "My friend ___ (speak) three languages.", "correctAnswer": ["speaks"]}]'::jsonb
),
(
  9,
  'Present Simple: Negative and Questions',
  'To make a negative sentence in the Present Simple, we use ''do not'' (don''t) or ''does not'' (doesn''t) before the base form of the verb.

Use don''t with I, you, we, they: I don''t like coffee.
Use doesn''t with he, she, it: She doesn''t like coffee.

To make a question, we put Do or Does at the beginning of the sentence: Do you like coffee? Does she like coffee?

Important: after don''t/doesn''t and Do/Does, the verb always stays in its base form, without -s.',
  '[{"sentence": "I don''t eat meat.", "note": "I + don''t + base form"}, {"sentence": "She doesn''t like loud music.", "note": "she + doesn''t + base form"}, {"sentence": "Do you speak English?", "note": "Do + you + base form"}, {"sentence": "Does he work on Sundays?", "note": "Does + he + base form"}, {"sentence": "They don''t live here anymore.", "note": "they + don''t + base form"}]'::jsonb,
  '[{"id": "g9q1", "type": "fill-blank", "text": "I ___ (not like) spicy food.", "correctAnswer": ["don''t like", "do not like"]}, {"id": "g9q2", "type": "fill-blank", "text": "She ___ (not work) on Sundays.", "correctAnswer": ["doesn''t work", "does not work"]}, {"id": "g9q3", "type": "multiple-choice", "text": "___ you like tea?", "options": ["Do", "Does", "Are"], "correctAnswer": "Do"}, {"id": "g9q4", "type": "multiple-choice", "text": "___ he play football?", "options": ["Do", "Does", "Is"], "correctAnswer": "Does"}, {"id": "g9q5", "type": "fill-blank", "text": "We ___ (not have) a car.", "correctAnswer": ["don''t have", "do not have"]}, {"id": "g9q6", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Does she likes tea?", "Does she like tea?", "Do she like tea?"], "correctAnswer": "Does she like tea?"}, {"id": "g9q7", "type": "fill-blank", "text": "They ___ (not study) on weekends.", "correctAnswer": ["don''t study", "do not study"]}, {"id": "g9q8", "type": "multiple-choice", "text": "Choose the correct negative sentence.", "options": ["He don''t like fish.", "He doesn''t likes fish.", "He doesn''t like fish."], "correctAnswer": "He doesn''t like fish."}, {"id": "g9q9", "type": "fill-blank", "text": "___ your sister speak French? (question)", "correctAnswer": ["Does"]}, {"id": "g9q10", "type": "fill-blank", "text": "I ___ (not understand) this question.", "correctAnswer": ["don''t understand", "do not understand"]}]'::jsonb
),
(
  10,
  'Adverbs of Frequency (always, usually, often, sometimes, rarely, never)',
  'Adverbs of frequency tell us how often something happens. Common ones, from most to least frequent: always, usually, often, sometimes, rarely, never.

These adverbs usually come before the main verb: She always drinks tea in the morning.

But with the verb ''to be'', the adverb comes after it: He is always late.

In questions, we often use ''How often...?'' to ask about frequency: How often do you exercise?',
  '[{"sentence": "I always wake up at seven.", "note": "before main verb"}, {"sentence": "He is often busy on Mondays.", "note": "after ''to be''"}, {"sentence": "We sometimes go to the cinema.", "note": "before main verb"}, {"sentence": "She never drinks coffee.", "note": "before main verb"}, {"sentence": "How often do you read books?", "note": "question with How often"}]'::jsonb,
  '[{"id": "g10q1", "type": "multiple-choice", "text": "I ___ go to bed early. (100% of the time)", "options": ["always", "never", "rarely"], "correctAnswer": "always"}, {"id": "g10q2", "type": "multiple-choice", "text": "She ___ eats vegetables. (0% of the time)", "options": ["always", "often", "never"], "correctAnswer": "never"}, {"id": "g10q3", "type": "multiple-choice", "text": "He is ___ late for class.", "options": ["usually", "the usually", "usual"], "correctAnswer": "usually"}, {"id": "g10q4", "type": "fill-blank", "text": "We ___ (sometimes) watch movies on Friday.", "correctAnswer": ["sometimes"]}, {"id": "g10q5", "type": "multiple-choice", "text": "Choose the correct word order.", "options": ["I drink always tea.", "I always drink tea.", "Always I drink tea."], "correctAnswer": "I always drink tea."}, {"id": "g10q6", "type": "fill-blank", "text": "___ often do you go to the gym?", "correctAnswer": ["How"]}, {"id": "g10q7", "type": "multiple-choice", "text": "They are ___ happy to help.", "options": ["always", "alway", "all way"], "correctAnswer": "always"}, {"id": "g10q8", "type": "fill-blank", "text": "She ___ (rarely) eats fast food.", "correctAnswer": ["rarely"]}, {"id": "g10q9", "type": "multiple-choice", "text": "Choose the correct sentence with ''to be''.", "options": ["He always is tired.", "He is always tired.", "Always he is tired."], "correctAnswer": "He is always tired."}, {"id": "g10q10", "type": "fill-blank", "text": "I ___ (often) visit my grandparents.", "correctAnswer": ["often"]}]'::jsonb
);
