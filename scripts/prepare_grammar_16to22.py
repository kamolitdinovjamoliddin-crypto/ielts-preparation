import json

lessons = []

# ===================== KUN 16: Past Simple - to be (was/were) =====================
lessons.append({
    "day_number": 16,
    "title": "Past Simple: to be (was / were)",
    "explanation": (
        "The past form of 'to be' has two forms: was and were.\n\n"
        "Use 'was' with I, he, she, it: I was tired. She was happy.\n"
        "Use 'were' with you, we, they: You were late. They were at home.\n\n"
        "Negative: was not (wasn't), were not (weren't).\n\n"
        "Question: Was + subject...? Were + subject...? Was she ready? Were they at school?"
    ),
    "examples": [
        {"sentence": "I was at home yesterday.", "note": "I + was"},
        {"sentence": "She was a teacher last year.", "note": "she + was"},
        {"sentence": "We were on holiday last week.", "note": "we + were"},
        {"sentence": "They weren't at the party.", "note": "negative"},
        {"sentence": "Were you busy yesterday?", "note": "question"},
    ],
    "questions": [
        {"id": "g16q1", "type": "multiple-choice", "text": "I ___ at school yesterday.", "options": ["was", "were", "am"], "correctAnswer": "was"},
        {"id": "g16q2", "type": "multiple-choice", "text": "They ___ very happy about the news.", "options": ["was", "were", "is"], "correctAnswer": "were"},
        {"id": "g16q3", "type": "multiple-choice", "text": "She ___ not at home last night.", "options": ["was", "were", "is"], "correctAnswer": "was"},
        {"id": "g16q4", "type": "fill-blank", "text": "We ___ (be) tired after the trip.", "correctAnswer": ["were"]},
        {"id": "g16q5", "type": "fill-blank", "text": "___ you at the meeting yesterday?", "correctAnswer": ["Were"]},
        {"id": "g16q6", "type": "multiple-choice", "text": "He ___ ill last week.", "options": ["was", "were", "be"], "correctAnswer": "was"},
        {"id": "g16q7", "type": "fill-blank", "text": "It ___ (be, negative) a good day.", "correctAnswer": ["wasn't", "was not"]},
        {"id": "g16q8", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Was they at home?", "Were they at home?", "Did they was at home?"], "correctAnswer": "Were they at home?"},
        {"id": "g16q9", "type": "fill-blank", "text": "The weather ___ (be) terrible yesterday.", "correctAnswer": ["was"]},
        {"id": "g16q10", "type": "multiple-choice", "text": "My parents ___ proud of me.", "options": ["was", "were", "is"], "correctAnswer": "were"},
    ],
})

# ===================== KUN 17: Past Simple - Regular Verbs =====================
lessons.append({
    "day_number": 17,
    "title": "Past Simple: Regular Verbs",
    "explanation": (
        "Regular verbs form the past simple by adding -ed to the base form: work -> worked, play -> played.\n\n"
        "If the verb ends in -e, just add -d: live -> lived, like -> liked.\n\n"
        "If the verb ends in consonant + y, change y to i and add -ed: study -> studied.\n\n"
        "Short verbs ending in one vowel + one consonant double the last letter: stop -> stopped.\n\n"
        "The Past Simple form is the same for all subjects: I worked, you worked, he worked, they worked."
    ),
    "examples": [
        {"sentence": "I worked late yesterday.", "note": "work -> worked"},
        {"sentence": "She lived in London for two years.", "note": "live -> lived"},
        {"sentence": "He studied hard for the exam.", "note": "study -> studied"},
        {"sentence": "They stopped at the red light.", "note": "stop -> stopped (double letter)"},
        {"sentence": "We played football last Sunday.", "note": "play -> played"},
    ],
    "questions": [
        {"id": "g17q1", "type": "fill-blank", "text": "I ___ (watch) a movie last night.", "correctAnswer": ["watched"]},
        {"id": "g17q2", "type": "fill-blank", "text": "She ___ (study) for three hours yesterday.", "correctAnswer": ["studied"]},
        {"id": "g17q3", "type": "fill-blank", "text": "They ___ (play) tennis last weekend.", "correctAnswer": ["played"]},
        {"id": "g17q4", "type": "multiple-choice", "text": "What is the past form of 'stop'?", "options": ["stoped", "stopped", "stopd"], "correctAnswer": "stopped"},
        {"id": "g17q5", "type": "multiple-choice", "text": "What is the past form of 'live'?", "options": ["lived", "liveed", "livd"], "correctAnswer": "lived"},
        {"id": "g17q6", "type": "fill-blank", "text": "We ___ (visit) our grandparents last month.", "correctAnswer": ["visited"]},
        {"id": "g17q7", "type": "fill-blank", "text": "He ___ (clean) his room yesterday.", "correctAnswer": ["cleaned"]},
        {"id": "g17q8", "type": "multiple-choice", "text": "What is the past form of 'carry'?", "options": ["carryed", "carried", "carrys"], "correctAnswer": "carried"},
        {"id": "g17q9", "type": "fill-blank", "text": "She ___ (open) the window because it was hot.", "correctAnswer": ["opened"]},
        {"id": "g17q10", "type": "fill-blank", "text": "I ___ (finish) my homework before dinner.", "correctAnswer": ["finished"]},
    ],
})

# ===================== KUN 18: Past Simple - Irregular Verbs =====================
lessons.append({
    "day_number": 18,
    "title": "Past Simple: Irregular Verbs",
    "explanation": (
        "Many common English verbs don't follow the -ed rule. These are called irregular verbs, and "
        "their past forms must be memorized.\n\n"
        "Some common examples: go -> went, have -> had, do -> did, see -> saw, eat -> ate, "
        "make -> made, take -> took, come -> came, write -> wrote, read -> read (same spelling, "
        "different pronunciation).\n\n"
        "Like regular verbs, the irregular past form is the same for all subjects: I went, she went, "
        "they went."
    ),
    "examples": [
        {"sentence": "I went to the market yesterday.", "note": "go -> went"},
        {"sentence": "She had a great time at the party.", "note": "have -> had"},
        {"sentence": "We saw a beautiful sunset.", "note": "see -> saw"},
        {"sentence": "He made a delicious cake.", "note": "make -> made"},
        {"sentence": "They came home late last night.", "note": "come -> came"},
    ],
    "questions": [
        {"id": "g18q1", "type": "fill-blank", "text": "I ___ (go) to the cinema yesterday.", "correctAnswer": ["went"]},
        {"id": "g18q2", "type": "fill-blank", "text": "She ___ (eat) breakfast at seven.", "correctAnswer": ["ate"]},
        {"id": "g18q3", "type": "fill-blank", "text": "We ___ (have) a meeting this morning.", "correctAnswer": ["had"]},
        {"id": "g18q4", "type": "multiple-choice", "text": "What is the past form of 'see'?", "options": ["seed", "saw", "seen"], "correctAnswer": "saw"},
        {"id": "g18q5", "type": "multiple-choice", "text": "What is the past form of 'write'?", "options": ["writed", "wrote", "writen"], "correctAnswer": "wrote"},
        {"id": "g18q6", "type": "fill-blank", "text": "He ___ (take) the bus to school.", "correctAnswer": ["took"]},
        {"id": "g18q7", "type": "fill-blank", "text": "They ___ (do) their homework together.", "correctAnswer": ["did"]},
        {"id": "g18q8", "type": "multiple-choice", "text": "What is the past form of 'make'?", "options": ["maked", "made", "maded"], "correctAnswer": "made"},
        {"id": "g18q9", "type": "fill-blank", "text": "I ___ (come) home at six yesterday.", "correctAnswer": ["came"]},
        {"id": "g18q10", "type": "multiple-choice", "text": "What is the past form of 'go'?", "options": ["goed", "went", "gone"], "correctAnswer": "went"},
    ],
})

# ===================== KUN 19: Past Simple - Negative & Questions =====================
lessons.append({
    "day_number": 19,
    "title": "Past Simple: Negative and Questions",
    "explanation": (
        "To make a negative sentence in the Past Simple, we use 'did not' (didn't) before the base form "
        "of the verb - for both regular and irregular verbs.\n\n"
        "I didn't go. She didn't work. They didn't see it.\n\n"
        "To make a question, we put 'Did' at the beginning: Did you go? Did she work?\n\n"
        "Important: after didn't and Did, the verb is always in its base form - never the past form. "
        "We say 'Did you go?', NOT 'Did you went?'."
    ),
    "examples": [
        {"sentence": "I didn't go to the party.", "note": "didn't + base form"},
        {"sentence": "She didn't finish her homework.", "note": "didn't + base form"},
        {"sentence": "Did you see that movie?", "note": "Did + base form"},
        {"sentence": "Did they come to the meeting?", "note": "Did + base form"},
        {"sentence": "We didn't have time yesterday.", "note": "didn't + base form"},
    ],
    "questions": [
        {"id": "g19q1", "type": "fill-blank", "text": "I ___ (not go) to school yesterday.", "correctAnswer": ["didn't go", "did not go"]},
        {"id": "g19q2", "type": "multiple-choice", "text": "___ you see Maria yesterday?", "options": ["Do", "Did", "Were"], "correctAnswer": "Did"},
        {"id": "g19q3", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Did she went home?", "Did she go home?", "Did she goes home?"], "correctAnswer": "Did she go home?"},
        {"id": "g19q4", "type": "fill-blank", "text": "He ___ (not eat) breakfast this morning.", "correctAnswer": ["didn't eat", "did not eat"]},
        {"id": "g19q5", "type": "fill-blank", "text": "They ___ (not come) to the party last night.", "correctAnswer": ["didn't come", "did not come"]},
        {"id": "g19q6", "type": "multiple-choice", "text": "___ they finish the project on time?", "options": ["Do", "Did", "Does"], "correctAnswer": "Did"},
        {"id": "g19q7", "type": "fill-blank", "text": "We ___ (not have) enough money.", "correctAnswer": ["didn't have", "did not have"]},
        {"id": "g19q8", "type": "multiple-choice", "text": "Choose the correct negative sentence.", "options": ["She didn't went there.", "She didn't go there.", "She not went there."], "correctAnswer": "She didn't go there."},
        {"id": "g19q9", "type": "fill-blank", "text": "___ you study for the test? (question)", "correctAnswer": ["Did"]},
        {"id": "g19q10", "type": "fill-blank", "text": "I ___ (not understand) the lesson yesterday.", "correctAnswer": ["didn't understand", "did not understand"]},
    ],
})

# ===================== KUN 20: Past Continuous =====================
lessons.append({
    "day_number": 20,
    "title": "Past Continuous (was/were + -ing)",
    "explanation": (
        "We use the Past Continuous for actions that were in progress at a specific time in the past.\n\n"
        "Form: was/were + verb-ing. I was working, they were sleeping.\n\n"
        "We often use the Past Continuous with the Past Simple to show that one action interrupted another: "
        "I was watching TV when the phone rang.\n\n"
        "We also use it to describe the background or scene of a story: It was raining, and people were "
        "walking quickly."
    ),
    "examples": [
        {"sentence": "I was sleeping when you called.", "note": "background action + interruption"},
        {"sentence": "She was cooking dinner at 7 pm.", "note": "action in progress at a specific time"},
        {"sentence": "They were watching a movie last night.", "note": "ongoing past action"},
        {"sentence": "It was raining when we left the house.", "note": "scene description"},
        {"sentence": "What were you doing yesterday at noon?", "note": "question"},
    ],
    "questions": [
        {"id": "g20q1", "type": "fill-blank", "text": "I ___ (sleep) when the phone rang.", "correctAnswer": ["was sleeping"]},
        {"id": "g20q2", "type": "fill-blank", "text": "They ___ (play) football when it started to rain.", "correctAnswer": ["were playing"]},
        {"id": "g20q3", "type": "multiple-choice", "text": "She ___ (cook) dinner at 6 pm yesterday.", "options": ["cooked", "was cooking", "cooks"], "correctAnswer": "was cooking"},
        {"id": "g20q4", "type": "fill-blank", "text": "We ___ (watch) TV when you arrived.", "correctAnswer": ["were watching"]},
        {"id": "g20q5", "type": "multiple-choice", "text": "What ___ you doing at 9 pm last night?", "options": ["was", "were", "did"], "correctAnswer": "were"},
        {"id": "g20q6", "type": "fill-blank", "text": "He ___ (not listen) when I explained the rule.", "correctAnswer": ["wasn't listening", "was not listening"]},
        {"id": "g20q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["It was raining when we left.", "It rained when we were leaving.", "It was rain when we left."], "correctAnswer": "It was raining when we left."},
        {"id": "g20q8", "type": "fill-blank", "text": "I ___ (read) a book when the lights went out.", "correctAnswer": ["was reading"]},
        {"id": "g20q9", "type": "multiple-choice", "text": "___ they sleeping when you called?", "options": ["Was", "Were", "Did"], "correctAnswer": "Were"},
        {"id": "g20q10", "type": "fill-blank", "text": "She ___ (walk) home when she saw an old friend.", "correctAnswer": ["was walking"]},
    ],
})

# ===================== KUN 21: Prepositions of Time =====================
lessons.append({
    "day_number": 21,
    "title": "Prepositions of Time (in, on, at)",
    "explanation": (
        "Prepositions of time tell us when something happens.\n\n"
        "'In' is used for months, years, seasons, and longer periods: in May, in 2020, in summer, "
        "in the morning.\n\n"
        "'On' is used for specific days and dates: on Monday, on my birthday, on 5th May.\n\n"
        "'At' is used for specific times and certain fixed expressions: at 7 o'clock, at night, "
        "at the weekend, at Christmas."
    ),
    "examples": [
        {"sentence": "I was born in 2005.", "note": "in + year"},
        {"sentence": "We have class on Mondays.", "note": "on + day"},
        {"sentence": "The meeting starts at 9 o'clock.", "note": "at + clock time"},
        {"sentence": "She studies in the evening.", "note": "in + part of day"},
        {"sentence": "They go to the village at the weekend.", "note": "at + the weekend"},
    ],
    "questions": [
        {"id": "g21q1", "type": "multiple-choice", "text": "My birthday is ___ June.", "options": ["in", "on", "at"], "correctAnswer": "in"},
        {"id": "g21q2", "type": "multiple-choice", "text": "We meet ___ Fridays.", "options": ["in", "on", "at"], "correctAnswer": "on"},
        {"id": "g21q3", "type": "multiple-choice", "text": "The film starts ___ 8 pm.", "options": ["in", "on", "at"], "correctAnswer": "at"},
        {"id": "g21q4", "type": "fill-blank", "text": "I usually study ___ the morning.", "correctAnswer": ["in"]},
        {"id": "g21q5", "type": "fill-blank", "text": "She was born ___ 2002.", "correctAnswer": ["in"]},
        {"id": "g21q6", "type": "multiple-choice", "text": "We don't have school ___ the weekend.", "options": ["in", "on", "at"], "correctAnswer": "at"},
        {"id": "g21q7", "type": "fill-blank", "text": "The shop closes ___ midnight.", "correctAnswer": ["at"]},
        {"id": "g21q8", "type": "multiple-choice", "text": "I will see you ___ Sunday.", "options": ["in", "on", "at"], "correctAnswer": "on"},
        {"id": "g21q9", "type": "fill-blank", "text": "It often snows ___ winter.", "correctAnswer": ["in"]},
        {"id": "g21q10", "type": "multiple-choice", "text": "We celebrate ___ Christmas every year.", "options": ["in", "on", "at"], "correctAnswer": "at"},
    ],
})

# ===================== KUN 22: Adverbs of Manner =====================
lessons.append({
    "day_number": 22,
    "title": "Adverbs of Manner (quickly, well, carefully, slowly)",
    "explanation": (
        "Adverbs of manner describe how an action happens. They often answer the question 'How?'\n\n"
        "Most adverbs of manner are formed by adding -ly to an adjective: quick -> quickly, "
        "slow -> slowly, careful -> carefully.\n\n"
        "Some adverbs are irregular: good -> well, fast -> fast (no change).\n\n"
        "Adverbs of manner usually come after the verb, or after the object if there is one: "
        "She speaks English fluently. He drives carefully."
    ),
    "examples": [
        {"sentence": "She speaks English fluently.", "note": "fluent -> fluently"},
        {"sentence": "He drives very carefully.", "note": "careful -> carefully"},
        {"sentence": "They walked slowly through the park.", "note": "slow -> slowly"},
        {"sentence": "My sister sings well.", "note": "good -> well (irregular)"},
        {"sentence": "He runs fast.", "note": "fast stays the same"},
    ],
    "questions": [
        {"id": "g22q1", "type": "fill-blank", "text": "She walks ___ (quick).", "correctAnswer": ["quickly"]},
        {"id": "g22q2", "type": "fill-blank", "text": "He plays the piano very ___ (good).", "correctAnswer": ["well"]},
        {"id": "g22q3", "type": "multiple-choice", "text": "What is the adverb form of 'careful'?", "options": ["carefuly", "carefully", "carefulley"], "correctAnswer": "carefully"},
        {"id": "g22q4", "type": "fill-blank", "text": "Please speak ___ (slow), I don't understand.", "correctAnswer": ["slowly"]},
        {"id": "g22q5", "type": "multiple-choice", "text": "He answered the question ___.", "options": ["correct", "correctly", "correctness"], "correctAnswer": "correctly"},
        {"id": "g22q6", "type": "fill-blank", "text": "She did her homework ___ (quiet).", "correctAnswer": ["quietly"]},
        {"id": "g22q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He runs very fastly.", "He runs very fast.", "He runs very fasted."], "correctAnswer": "He runs very fast."},
        {"id": "g22q8", "type": "fill-blank", "text": "They worked ___ (hard) all day.", "correctAnswer": ["hard"]},
        {"id": "g22q9", "type": "multiple-choice", "text": "She sings ___.", "options": ["beautiful", "beautifully", "beauty"], "correctAnswer": "beautifully"},
        {"id": "g22q10", "type": "fill-blank", "text": "He passed the exam ___ (easy).", "correctAnswer": ["easily"]},
    ],
})

with open('/home/claude/ielts-mock/scripts/grammar_16to22.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print(f"Saqlandi: {len(lessons)} dars")
for l in lessons:
    print(f"Kun {l['day_number']}: {l['title']} - {len(l['questions'])} savol")
