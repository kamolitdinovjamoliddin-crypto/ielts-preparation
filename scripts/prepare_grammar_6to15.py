import json

lessons = []

# ===================== KUN 6: Possessive Adjectives =====================
lessons.append({
    "day_number": 6,
    "title": "Possessive Adjectives (my, your, his, her, its, our, their)",
    "explanation": (
        "Possessive adjectives show who something belongs to. They come before a noun.\n\n"
        "I -> my, You -> your, He -> his, She -> her, It -> its, We -> our, They -> their.\n\n"
        "Unlike some other languages, possessive adjectives in English do not change for plural nouns: "
        "'my book' and 'my books' both use 'my'."
    ),
    "examples": [
        {"sentence": "This is my house.", "note": "I -> my"},
        {"sentence": "Is this your bag?", "note": "you -> your"},
        {"sentence": "He loves his job.", "note": "he -> his"},
        {"sentence": "She visited her grandmother.", "note": "she -> her"},
        {"sentence": "The cat is eating its food.", "note": "it -> its"},
    ],
    "questions": [
        {"id": "g6q1", "type": "multiple-choice", "text": "This is ___ pen. (I)", "options": ["my", "your", "his"], "correctAnswer": "my"},
        {"id": "g6q2", "type": "multiple-choice", "text": "Is that ___ car? (you)", "options": ["my", "your", "her"], "correctAnswer": "your"},
        {"id": "g6q3", "type": "multiple-choice", "text": "Peter lost ___ keys. (he)", "options": ["his", "her", "its"], "correctAnswer": "his"},
        {"id": "g6q4", "type": "multiple-choice", "text": "Maria called ___ mother. (she)", "options": ["his", "her", "their"], "correctAnswer": "her"},
        {"id": "g6q5", "type": "fill-blank", "text": "We love ___ new house. (we)", "correctAnswer": ["our"]},
        {"id": "g6q6", "type": "fill-blank", "text": "The students did ___ homework. (they)", "correctAnswer": ["their"]},
        {"id": "g6q7", "type": "multiple-choice", "text": "The dog wagged ___ tail. (it)", "options": ["its", "his", "her"], "correctAnswer": "its"},
        {"id": "g6q8", "type": "fill-blank", "text": "I can't find ___ phone. (I)", "correctAnswer": ["my"]},
        {"id": "g6q9", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["She is doing her homework.", "She is doing its homework.", "She is doing their homework."], "correctAnswer": "She is doing her homework."},
        {"id": "g6q10", "type": "fill-blank", "text": "John and Mary love ___ children. (they)", "correctAnswer": ["their"]},
    ],
})

# ===================== KUN 7: Possessive 's =====================
lessons.append({
    "day_number": 7,
    "title": "Possessive 's (Apostrophe S)",
    "explanation": (
        "We use 's after a singular noun to show possession: the girl's book (the book belongs to the girl).\n\n"
        "For plural nouns ending in -s, we add only an apostrophe: the students' books.\n\n"
        "For irregular plural nouns that don't end in -s (like children, men, women), we add 's: "
        "the children's toys.\n\n"
        "We do not use 's for things - instead we usually use 'of' or just put the noun before another noun: "
        "the door of the car, or the car door."
    ),
    "examples": [
        {"sentence": "This is Anna's bag.", "note": "singular noun + 's"},
        {"sentence": "The boys' room is upstairs.", "note": "plural ending in -s + apostrophe only"},
        {"sentence": "The children's playground is closed.", "note": "irregular plural + 's"},
        {"sentence": "My sister's car is red.", "note": "singular noun + 's"},
        {"sentence": "The teachers' meeting starts at 5.", "note": "plural ending in -s + apostrophe only"},
    ],
    "questions": [
        {"id": "g7q1", "type": "multiple-choice", "text": "This is ___ bike. (Tom)", "options": ["Tom's", "Toms'", "Toms"], "correctAnswer": "Tom's"},
        {"id": "g7q2", "type": "multiple-choice", "text": "The ___ books are on the table. (students, plural)", "options": ["student's", "students'", "students"], "correctAnswer": "students'"},
        {"id": "g7q3", "type": "multiple-choice", "text": "The ___ toys are everywhere. (children)", "options": ["children's", "childrens'", "childrens"], "correctAnswer": "children's"},
        {"id": "g7q4", "type": "fill-blank", "text": "This is my ___ house. (sister)", "correctAnswer": ["sister's"]},
        {"id": "g7q5", "type": "fill-blank", "text": "The ___ room is very clean. (boys, plural)", "correctAnswer": ["boys'"]},
        {"id": "g7q6", "type": "multiple-choice", "text": "Whose pen is this? It's ___.", "options": ["Sara's", "Saras'", "Sara"], "correctAnswer": "Sara's"},
        {"id": "g7q7", "type": "fill-blank", "text": "The ___ office is on the second floor. (manager)", "correctAnswer": ["manager's"]},
        {"id": "g7q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["The dogs' food is here.", "The dog's's food is here.", "The dogs food is here."], "correctAnswer": "The dogs' food is here."},
        {"id": "g7q9", "type": "fill-blank", "text": "Have you seen ___ new phone? (James)", "correctAnswer": ["James's"]},
        {"id": "g7q10", "type": "multiple-choice", "text": "The ___ shoes were left at the door. (women)", "options": ["women's", "womens'", "womens"], "correctAnswer": "women's"},
    ],
})

# ===================== KUN 8: Present Simple (affirmative) =====================
lessons.append({
    "day_number": 8,
    "title": "Present Simple (Affirmative)",
    "explanation": (
        "We use the Present Simple for habits, routines, facts, and things that are generally true.\n\n"
        "For I, you, we, they, we use the base form of the verb: I work, you play, they live.\n\n"
        "For he, she, it, we add -s to the verb: he works, she plays, it lives.\n\n"
        "Verbs ending in -ch, -sh, -ss, -x, -o add -es: he watches, she goes.\n\n"
        "Verbs ending in consonant + y change y to i and add -es: study -> studies."
    ),
    "examples": [
        {"sentence": "I work in a bank.", "note": "I + base form"},
        {"sentence": "She works in a hospital.", "note": "she + verb-s"},
        {"sentence": "He watches TV every evening.", "note": "watch -> watches"},
        {"sentence": "They live in Samarkand.", "note": "they + base form"},
        {"sentence": "My brother studies English.", "note": "study -> studies"},
    ],
    "questions": [
        {"id": "g8q1", "type": "fill-blank", "text": "She ___ (work) at a school.", "correctAnswer": ["works"]},
        {"id": "g8q2", "type": "fill-blank", "text": "I ___ (like) tea very much.", "correctAnswer": ["like"]},
        {"id": "g8q3", "type": "fill-blank", "text": "He ___ (go) to the gym every day.", "correctAnswer": ["goes"]},
        {"id": "g8q4", "type": "fill-blank", "text": "They ___ (play) football on weekends.", "correctAnswer": ["play"]},
        {"id": "g8q5", "type": "fill-blank", "text": "My mother ___ (cook) dinner every night.", "correctAnswer": ["cooks"]},
        {"id": "g8q6", "type": "multiple-choice", "text": "Which is correct?", "options": ["She studys hard.", "She studies hard.", "She studyes hard."], "correctAnswer": "She studies hard."},
        {"id": "g8q7", "type": "fill-blank", "text": "We ___ (live) in a big city.", "correctAnswer": ["live"]},
        {"id": "g8q8", "type": "fill-blank", "text": "The shop ___ (open) at nine.", "correctAnswer": ["opens"]},
        {"id": "g8q9", "type": "multiple-choice", "text": "Which is correct?", "options": ["He washs his car.", "He washes his car.", "He washies his car."], "correctAnswer": "He washes his car."},
        {"id": "g8q10", "type": "fill-blank", "text": "My friend ___ (speak) three languages.", "correctAnswer": ["speaks"]},
    ],
})

# ===================== KUN 9: Present Simple (negative & questions) =====================
lessons.append({
    "day_number": 9,
    "title": "Present Simple: Negative and Questions",
    "explanation": (
        "To make a negative sentence in the Present Simple, we use 'do not' (don't) or 'does not' (doesn't) "
        "before the base form of the verb.\n\n"
        "Use don't with I, you, we, they: I don't like coffee.\n"
        "Use doesn't with he, she, it: She doesn't like coffee.\n\n"
        "To make a question, we put Do or Does at the beginning of the sentence: Do you like coffee? "
        "Does she like coffee?\n\n"
        "Important: after don't/doesn't and Do/Does, the verb always stays in its base form, without -s."
    ),
    "examples": [
        {"sentence": "I don't eat meat.", "note": "I + don't + base form"},
        {"sentence": "She doesn't like loud music.", "note": "she + doesn't + base form"},
        {"sentence": "Do you speak English?", "note": "Do + you + base form"},
        {"sentence": "Does he work on Sundays?", "note": "Does + he + base form"},
        {"sentence": "They don't live here anymore.", "note": "they + don't + base form"},
    ],
    "questions": [
        {"id": "g9q1", "type": "fill-blank", "text": "I ___ (not like) spicy food.", "correctAnswer": ["don't like", "do not like"]},
        {"id": "g9q2", "type": "fill-blank", "text": "She ___ (not work) on Sundays.", "correctAnswer": ["doesn't work", "does not work"]},
        {"id": "g9q3", "type": "multiple-choice", "text": "___ you like tea?", "options": ["Do", "Does", "Are"], "correctAnswer": "Do"},
        {"id": "g9q4", "type": "multiple-choice", "text": "___ he play football?", "options": ["Do", "Does", "Is"], "correctAnswer": "Does"},
        {"id": "g9q5", "type": "fill-blank", "text": "We ___ (not have) a car.", "correctAnswer": ["don't have", "do not have"]},
        {"id": "g9q6", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Does she likes tea?", "Does she like tea?", "Do she like tea?"], "correctAnswer": "Does she like tea?"},
        {"id": "g9q7", "type": "fill-blank", "text": "They ___ (not study) on weekends.", "correctAnswer": ["don't study", "do not study"]},
        {"id": "g9q8", "type": "multiple-choice", "text": "Choose the correct negative sentence.", "options": ["He don't like fish.", "He doesn't likes fish.", "He doesn't like fish."], "correctAnswer": "He doesn't like fish."},
        {"id": "g9q9", "type": "fill-blank", "text": "___ your sister speak French? (question)", "correctAnswer": ["Does"]},
        {"id": "g9q10", "type": "fill-blank", "text": "I ___ (not understand) this question.", "correctAnswer": ["don't understand", "do not understand"]},
    ],
})

# ===================== KUN 10: Adverbs of Frequency =====================
lessons.append({
    "day_number": 10,
    "title": "Adverbs of Frequency (always, usually, often, sometimes, rarely, never)",
    "explanation": (
        "Adverbs of frequency tell us how often something happens. Common ones, from most to least frequent: "
        "always, usually, often, sometimes, rarely, never.\n\n"
        "These adverbs usually come before the main verb: She always drinks tea in the morning.\n\n"
        "But with the verb 'to be', the adverb comes after it: He is always late.\n\n"
        "In questions, we often use 'How often...?' to ask about frequency: How often do you exercise?"
    ),
    "examples": [
        {"sentence": "I always wake up at seven.", "note": "before main verb"},
        {"sentence": "He is often busy on Mondays.", "note": "after 'to be'"},
        {"sentence": "We sometimes go to the cinema.", "note": "before main verb"},
        {"sentence": "She never drinks coffee.", "note": "before main verb"},
        {"sentence": "How often do you read books?", "note": "question with How often"},
    ],
    "questions": [
        {"id": "g10q1", "type": "multiple-choice", "text": "I ___ go to bed early. (100% of the time)", "options": ["always", "never", "rarely"], "correctAnswer": "always"},
        {"id": "g10q2", "type": "multiple-choice", "text": "She ___ eats vegetables. (0% of the time)", "options": ["always", "often", "never"], "correctAnswer": "never"},
        {"id": "g10q3", "type": "multiple-choice", "text": "He is ___ late for class.", "options": ["usually", "the usually", "usual"], "correctAnswer": "usually"},
        {"id": "g10q4", "type": "fill-blank", "text": "We ___ (sometimes) watch movies on Friday.", "correctAnswer": ["sometimes"]},
        {"id": "g10q5", "type": "multiple-choice", "text": "Choose the correct word order.", "options": ["I drink always tea.", "I always drink tea.", "Always I drink tea."], "correctAnswer": "I always drink tea."},
        {"id": "g10q6", "type": "fill-blank", "text": "___ often do you go to the gym?", "correctAnswer": ["How"]},
        {"id": "g10q7", "type": "multiple-choice", "text": "They are ___ happy to help.", "options": ["always", "alway", "all way"], "correctAnswer": "always"},
        {"id": "g10q8", "type": "fill-blank", "text": "She ___ (rarely) eats fast food.", "correctAnswer": ["rarely"]},
        {"id": "g10q9", "type": "multiple-choice", "text": "Choose the correct sentence with 'to be'.", "options": ["He always is tired.", "He is always tired.", "Always he is tired."], "correctAnswer": "He is always tired."},
        {"id": "g10q10", "type": "fill-blank", "text": "I ___ (often) visit my grandparents.", "correctAnswer": ["often"]},
    ],
})

# ===================== KUN 11: Present Continuous =====================
lessons.append({
    "day_number": 11,
    "title": "Present Continuous (am/is/are + -ing)",
    "explanation": (
        "We use the Present Continuous for actions happening right now, or around the present time.\n\n"
        "Form: am/is/are + verb-ing. I am working, she is reading, they are playing.\n\n"
        "Most verbs simply add -ing: play -> playing, read -> reading.\n"
        "Verbs ending in -e usually drop the e: make -> making, write -> writing.\n"
        "Short verbs ending in one vowel + one consonant double the last letter: run -> running, sit -> sitting.\n\n"
        "We also use the Present Continuous for future arrangements: I am meeting her tomorrow."
    ),
    "examples": [
        {"sentence": "I am studying English now.", "note": "study -> studying"},
        {"sentence": "She is writing an email.", "note": "write -> writing (drop e)"},
        {"sentence": "They are running in the park.", "note": "run -> running (double letter)"},
        {"sentence": "He is not sleeping right now.", "note": "negative form"},
        {"sentence": "Are you listening to me?", "note": "question form"},
    ],
    "questions": [
        {"id": "g11q1", "type": "fill-blank", "text": "I ___ (write) a letter right now.", "correctAnswer": ["am writing"]},
        {"id": "g11q2", "type": "fill-blank", "text": "She ___ (read) a book at the moment.", "correctAnswer": ["is reading"]},
        {"id": "g11q3", "type": "fill-blank", "text": "They ___ (play) football now.", "correctAnswer": ["are playing"]},
        {"id": "g11q4", "type": "multiple-choice", "text": "What is the -ing form of 'run'?", "options": ["runing", "running", "runeing"], "correctAnswer": "running"},
        {"id": "g11q5", "type": "multiple-choice", "text": "What is the -ing form of 'make'?", "options": ["makeing", "making", "makking"], "correctAnswer": "making"},
        {"id": "g11q6", "type": "fill-blank", "text": "He ___ (not work) today.", "correctAnswer": ["is not working", "isn't working"]},
        {"id": "g11q7", "type": "multiple-choice", "text": "___ you listening to me?", "options": ["Do", "Are", "Is"], "correctAnswer": "Are"},
        {"id": "g11q8", "type": "fill-blank", "text": "We ___ (have) lunch right now.", "correctAnswer": ["are having"]},
        {"id": "g11q9", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["She is sit on the chair.", "She is sitting on the chair.", "She sitting on the chair."], "correctAnswer": "She is sitting on the chair."},
        {"id": "g11q10", "type": "fill-blank", "text": "I ___ (meet) my friend tomorrow evening.", "correctAnswer": ["am meeting"]},
    ],
})

# ===================== KUN 12: Present Simple vs Continuous =====================
lessons.append({
    "day_number": 12,
    "title": "Present Simple vs Present Continuous",
    "explanation": (
        "Present Simple is for habits, routines, facts, and permanent situations: I work in a bank. "
        "Water boils at 100 degrees.\n\n"
        "Present Continuous is for actions happening right now, or temporary situations: I am working "
        "right now. She is staying with friends this week.\n\n"
        "Some words signal which tense to use: words like 'always, usually, every day' often go with "
        "Present Simple, while 'now, right now, at the moment' go with Present Continuous.\n\n"
        "Some verbs (like, want, know, believe) are not normally used in the continuous form: "
        "we say 'I like it', not 'I am liking it'."
    ),
    "examples": [
        {"sentence": "I usually walk to school.", "note": "habit -> Present Simple"},
        {"sentence": "I am walking to school right now.", "note": "happening now -> Present Continuous"},
        {"sentence": "She works at a hospital.", "note": "permanent situation -> Present Simple"},
        {"sentence": "She is working late this week.", "note": "temporary -> Present Continuous"},
        {"sentence": "I know the answer.", "note": "'know' is not used in continuous form"},
    ],
    "questions": [
        {"id": "g12q1", "type": "multiple-choice", "text": "I ___ (study) English every day.", "options": ["study", "am studying", "studies"], "correctAnswer": "study"},
        {"id": "g12q2", "type": "multiple-choice", "text": "Look! It ___ (rain) outside.", "options": ["rains", "is raining", "rain"], "correctAnswer": "is raining"},
        {"id": "g12q3", "type": "multiple-choice", "text": "She ___ (not like) loud music. (general fact)", "options": ["doesn't like", "isn't liking", "don't like"], "correctAnswer": "doesn't like"},
        {"id": "g12q4", "type": "multiple-choice", "text": "Right now, they ___ (have) dinner.", "options": ["have", "are having", "has"], "correctAnswer": "are having"},
        {"id": "g12q5", "type": "fill-blank", "text": "He ___ (work) in a bank. (permanent job)", "correctAnswer": ["works"]},
        {"id": "g12q6", "type": "fill-blank", "text": "Be quiet, the baby ___ (sleep).", "correctAnswer": ["is sleeping"]},
        {"id": "g12q7", "type": "multiple-choice", "text": "Which sentence is correct?", "options": ["I am knowing the answer.", "I know the answer.", "I knows the answer."], "correctAnswer": "I know the answer."},
        {"id": "g12q8", "type": "fill-blank", "text": "We ___ (usually / have) breakfast at 7.", "correctAnswer": ["usually have"]},
        {"id": "g12q9", "type": "multiple-choice", "text": "At the moment, she ___ (study) for her exam.", "options": ["studies", "is studying", "study"], "correctAnswer": "is studying"},
        {"id": "g12q10", "type": "fill-blank", "text": "The sun ___ (rise) in the east. (general fact)", "correctAnswer": ["rises"]},
    ],
})

# ===================== KUN 13: There is / There are =====================
lessons.append({
    "day_number": 13,
    "title": "There is / There are",
    "explanation": (
        "We use 'There is' with singular and uncountable nouns, and 'There are' with plural nouns, "
        "to say that something exists or is present in a place.\n\n"
        "There is a book on the table. There are three books on the table.\n\n"
        "Negative: There isn't / There aren't. Question: Is there...? Are there...?\n\n"
        "We often use 'There is/are' with words like 'a', 'some', 'any', and numbers."
    ),
    "examples": [
        {"sentence": "There is a cat in the garden.", "note": "singular noun"},
        {"sentence": "There are five chairs in the room.", "note": "plural noun"},
        {"sentence": "There isn't any milk in the fridge.", "note": "negative, uncountable"},
        {"sentence": "Is there a bank near here?", "note": "question, singular"},
        {"sentence": "Are there any students in the classroom?", "note": "question, plural"},
    ],
    "questions": [
        {"id": "g13q1", "type": "multiple-choice", "text": "___ a pen on the desk.", "options": ["There is", "There are", "There be"], "correctAnswer": "There is"},
        {"id": "g13q2", "type": "multiple-choice", "text": "___ many books in the library.", "options": ["There is", "There are", "It is"], "correctAnswer": "There are"},
        {"id": "g13q3", "type": "fill-blank", "text": "___ a problem with my computer.", "correctAnswer": ["There is"]},
        {"id": "g13q4", "type": "fill-blank", "text": "___ many people at the party.", "correctAnswer": ["There were", "There are"]},
        {"id": "g13q5", "type": "multiple-choice", "text": "___ any tomatoes in the kitchen?", "options": ["Is there", "Are there", "Does there"], "correctAnswer": "Are there"},
        {"id": "g13q6", "type": "multiple-choice", "text": "___ a good restaurant near your house?", "options": ["Is there", "Are there", "Do there"], "correctAnswer": "Is there"},
        {"id": "g13q7", "type": "fill-blank", "text": "There ___ (not) any sugar left.", "correctAnswer": ["isn't", "is not"]},
        {"id": "g13q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["There is two windows.", "There are two windows.", "There two windows."], "correctAnswer": "There are two windows."},
        {"id": "g13q9", "type": "fill-blank", "text": "___ a lot of traffic this morning.", "correctAnswer": ["There was", "There is"]},
        {"id": "g13q10", "type": "multiple-choice", "text": "How many chairs ___ in the room?", "options": ["is there", "are there", "there are"], "correctAnswer": "are there"},
    ],
})

# ===================== KUN 14: Prepositions of Place =====================
lessons.append({
    "day_number": 14,
    "title": "Prepositions of Place (in, on, at, under, behind, next to)",
    "explanation": (
        "Prepositions of place show where something or someone is.\n\n"
        "'In' is for enclosed spaces: in a box, in a room, in a city.\n"
        "'On' is for surfaces: on the table, on the wall, on the floor.\n"
        "'At' is for specific points or places: at the door, at the bus stop, at school.\n\n"
        "Other useful prepositions: under (below something), behind (at the back of something), "
        "in front of (at the front of something), next to / beside (close to something), "
        "between (in the middle of two things)."
    ),
    "examples": [
        {"sentence": "The keys are in my bag.", "note": "in + enclosed space"},
        {"sentence": "The book is on the table.", "note": "on + surface"},
        {"sentence": "She is waiting at the bus stop.", "note": "at + specific point"},
        {"sentence": "The cat is under the bed.", "note": "under + below"},
        {"sentence": "The school is between the bank and the park.", "note": "between + two things"},
    ],
    "questions": [
        {"id": "g14q1", "type": "multiple-choice", "text": "The pen is ___ the table.", "options": ["in", "on", "at"], "correctAnswer": "on"},
        {"id": "g14q2", "type": "multiple-choice", "text": "I live ___ Tashkent.", "options": ["in", "on", "at"], "correctAnswer": "in"},
        {"id": "g14q3", "type": "multiple-choice", "text": "She is waiting ___ the door.", "options": ["in", "on", "at"], "correctAnswer": "at"},
        {"id": "g14q4", "type": "fill-blank", "text": "The cat is hiding ___ the sofa. (below)", "correctAnswer": ["under"]},
        {"id": "g14q5", "type": "fill-blank", "text": "The car is parked ___ the house. (close to)", "correctAnswer": ["next to", "beside"]},
        {"id": "g14q6", "type": "multiple-choice", "text": "There is a picture ___ the wall.", "options": ["in", "on", "at"], "correctAnswer": "on"},
        {"id": "g14q7", "type": "fill-blank", "text": "The garden is ___ the house. (at the back)", "correctAnswer": ["behind"]},
        {"id": "g14q8", "type": "multiple-choice", "text": "We are ___ school until 3 pm.", "options": ["in", "on", "at"], "correctAnswer": "at"},
        {"id": "g14q9", "type": "fill-blank", "text": "The bank is ___ the supermarket and the pharmacy.", "correctAnswer": ["between"]},
        {"id": "g14q10", "type": "multiple-choice", "text": "My phone is ___ my pocket.", "options": ["in", "on", "at"], "correctAnswer": "in"},
    ],
})

# ===================== KUN 15: Can / Can't (ability) =====================
lessons.append({
    "day_number": 15,
    "title": "Can / Can't (Ability)",
    "explanation": (
        "We use 'can' to talk about ability - things we are able to do.\n\n"
        "Can is a modal verb: it doesn't change form, and we don't add -s for he/she/it. "
        "She can swim. NOT: She cans swim.\n\n"
        "Negative: cannot or can't. I can't drive.\n\n"
        "Question: Can + subject + verb? Can you speak English?\n\n"
        "After can/can't, we always use the base form of the verb, without 'to'."
    ),
    "examples": [
        {"sentence": "I can swim very well.", "note": "ability"},
        {"sentence": "She can speak three languages.", "note": "can + base verb, no -s"},
        {"sentence": "He can't drive a car.", "note": "negative ability"},
        {"sentence": "Can you ride a bicycle?", "note": "question"},
        {"sentence": "They can play the piano.", "note": "ability"},
    ],
    "questions": [
        {"id": "g15q1", "type": "fill-blank", "text": "She ___ (can) speak French.", "correctAnswer": ["can"]},
        {"id": "g15q2", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He cans swim.", "He can swims.", "He can swim."], "correctAnswer": "He can swim."},
        {"id": "g15q3", "type": "fill-blank", "text": "I ___ (cannot) play the guitar.", "correctAnswer": ["can't", "cannot"]},
        {"id": "g15q4", "type": "multiple-choice", "text": "___ you cook Italian food?", "options": ["Can", "Do", "Are"], "correctAnswer": "Can"},
        {"id": "g15q5", "type": "fill-blank", "text": "My brother ___ (can) ride a horse.", "correctAnswer": ["can"]},
        {"id": "g15q6", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Can she to dance?", "Can she dances?", "Can she dance?"], "correctAnswer": "Can she dance?"},
        {"id": "g15q7", "type": "fill-blank", "text": "They ___ (can, negative) come to the party.", "correctAnswer": ["can't", "cannot"]},
        {"id": "g15q8", "type": "multiple-choice", "text": "Birds ___ fly, but they can't talk.", "options": ["can", "cans", "is can"], "correctAnswer": "can"},
        {"id": "g15q9", "type": "fill-blank", "text": "___ you understand this sentence?", "correctAnswer": ["Can"]},
        {"id": "g15q10", "type": "multiple-choice", "text": "We ___ see the mountains from here.", "options": ["can", "cans", "can to"], "correctAnswer": "can"},
    ],
})

with open('/home/claude/ielts-mock/scripts/grammar_6to15.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print(f"Saqlandi: {len(lessons)} dars")
for l in lessons:
    print(f"Kun {l['day_number']}: {l['title']} - {len(l['questions'])} savol")
