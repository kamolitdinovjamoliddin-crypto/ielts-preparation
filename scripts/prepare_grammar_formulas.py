import json

# Har bir kun uchun: {day: [(label, [(part, label, color), ...]), ...]}
# color: blue (Subject), green (Verb), amber (Object/Complement), red (negation), purple (auxiliary/other)

formulas = {
    1: [  # To Be
        ("Affirmative", [("S", "Subject", "blue"), ("am/is/are", "Verb (to be)", "green"), ("Complement", "Adjective/Noun", "amber")]),
        ("Negative", [("S", "Subject", "blue"), ("am/is/are + not", "Verb + not", "red"), ("Complement", "Adjective/Noun", "amber")]),
        ("Question", [("Am/Is/Are", "Verb (to be)", "green"), ("S", "Subject", "blue"), ("Complement?", "Adjective/Noun", "amber")]),
    ],
    2: [  # Personal Pronouns
        ("Subject pronoun + verb", [("I/You/He/She/It/We/They", "Subject Pronoun", "blue"), ("Verb", "Action", "green")]),
    ],
    3: [  # Articles
        ("Indefinite (first mention)", [("a/an", "Article", "purple"), ("Noun", "Singular Noun", "amber")]),
        ("Definite (specific)", [("the", "Article", "purple"), ("Noun", "Specific Noun", "amber")]),
    ],
    4: [  # Singular & Plural
        ("Regular plural", [("Noun", "Singular", "amber"), ("+ -s / -es", "Plural Ending", "green")]),
    ],
    5: [  # This/That/These/Those
        ("Near, singular", [("This", "Near + Singular", "blue"), ("is", "Verb", "green"), ("Noun", "Object", "amber")]),
        ("Far, plural", [("Those", "Far + Plural", "blue"), ("are", "Verb", "green"), ("Noun (plural)", "Object", "amber")]),
    ],
    6: [  # Possessive Adjectives
        ("Possessive", [("my/your/his/her/its/our/their", "Possessive Adjective", "blue"), ("Noun", "Thing owned", "amber")]),
    ],
    7: [  # Possessive 's
        ("Singular owner", [("Noun (owner)", "Owner", "blue"), ("'s", "Apostrophe S", "purple"), ("Noun (thing)", "Thing owned", "amber")]),
        ("Plural owner (ends in -s)", [("Noun-s (owner)", "Owner (plural)", "blue"), ("'", "Apostrophe only", "purple"), ("Noun (thing)", "Thing owned", "amber")]),
    ],
    8: [  # Present Simple affirmative
        ("I/You/We/They", [("S", "Subject", "blue"), ("V (base)", "Verb base form", "green"), ("Object", "Object", "amber")]),
        ("He/She/It", [("S", "Subject", "blue"), ("V + s/es", "Verb + s", "green"), ("Object", "Object", "amber")]),
    ],
    9: [  # Present Simple negative/questions
        ("Negative", [("S", "Subject", "blue"), ("don't/doesn't", "Auxiliary + not", "red"), ("V (base)", "Verb base form", "green")]),
        ("Question", [("Do/Does", "Auxiliary", "purple"), ("S", "Subject", "blue"), ("V (base)?", "Verb base form", "green")]),
    ],
    10: [  # Adverbs of Frequency
        ("With main verb", [("S", "Subject", "blue"), ("always/usually/often...", "Adverb of Frequency", "purple"), ("V", "Main Verb", "green")]),
        ("With 'to be'", [("S", "Subject", "blue"), ("am/is/are", "To Be", "green"), ("always/usually/often...", "Adverb of Frequency", "purple")]),
    ],
    11: [  # Present Continuous
        ("Affirmative", [("S", "Subject", "blue"), ("am/is/are", "To Be", "green"), ("V-ing", "Verb + ing", "amber")]),
        ("Negative", [("S", "Subject", "blue"), ("am/is/are + not", "To Be + not", "red"), ("V-ing", "Verb + ing", "amber")]),
        ("Question", [("Am/Is/Are", "To Be", "green"), ("S", "Subject", "blue"), ("V-ing?", "Verb + ing", "amber")]),
    ],
    12: [  # Present Simple vs Continuous
        ("Simple (habit/fact)", [("S", "Subject", "blue"), ("V(-s)", "Verb base/with s", "green"), ("always/every day...", "Time marker", "purple")]),
        ("Continuous (now)", [("S", "Subject", "blue"), ("am/is/are + V-ing", "To Be + Verb-ing", "green"), ("now/right now...", "Time marker", "purple")]),
    ],
    13: [  # There is/are
        ("Singular", [("There is", "Existence (singular)", "green"), ("a/an + Noun", "Subject", "amber")]),
        ("Plural", [("There are", "Existence (plural)", "green"), ("Noun (plural)", "Subject", "amber")]),
    ],
    14: [  # Prepositions of Place
        ("Location", [("S + Verb (to be)", "Subject + Verb", "blue"), ("in/on/at/under/behind...", "Preposition", "purple"), ("Place", "Location", "amber")]),
    ],
    15: [  # Can/Can't
        ("Affirmative", [("S", "Subject", "blue"), ("can", "Modal Verb", "green"), ("V (base)", "Verb base form", "amber")]),
        ("Negative", [("S", "Subject", "blue"), ("can't / cannot", "Modal + not", "red"), ("V (base)", "Verb base form", "amber")]),
        ("Question", [("Can", "Modal Verb", "green"), ("S", "Subject", "blue"), ("V (base)?", "Verb base form", "amber")]),
    ],
    16: [  # Past Simple to be
        ("Affirmative", [("S", "Subject", "blue"), ("was/were", "To Be (past)", "green"), ("Complement", "Adjective/Noun", "amber")]),
        ("Negative", [("S", "Subject", "blue"), ("wasn't/weren't", "To Be (past) + not", "red"), ("Complement", "Adjective/Noun", "amber")]),
        ("Question", [("Was/Were", "To Be (past)", "green"), ("S", "Subject", "blue"), ("Complement?", "Adjective/Noun", "amber")]),
    ],
    17: [  # Past Simple regular
        ("Affirmative (all subjects)", [("S", "Subject", "blue"), ("V + ed", "Verb + ed", "green"), ("Object", "Object", "amber")]),
    ],
    18: [  # Past Simple irregular
        ("Affirmative (all subjects)", [("S", "Subject", "blue"), ("V2", "Irregular Past Form", "green"), ("Object", "Object", "amber")]),
    ],
    19: [  # Past Simple negative/questions
        ("Negative", [("S", "Subject", "blue"), ("didn't", "Auxiliary + not", "red"), ("V (base)", "Verb base form", "green")]),
        ("Question", [("Did", "Auxiliary", "purple"), ("S", "Subject", "blue"), ("V (base)?", "Verb base form", "green")]),
    ],
    20: [  # Past Continuous
        ("Affirmative", [("S", "Subject", "blue"), ("was/were", "To Be (past)", "green"), ("V-ing", "Verb + ing", "amber")]),
        ("With interruption", [("While + S + was/were + V-ing", "Longer action", "purple"), (",", "", "purple"), ("S + V2", "Shorter action (Past Simple)", "green")]),
    ],
    21: [  # Prepositions of Time
        ("Time", [("S + Verb", "Subject + Verb", "blue"), ("in/on/at", "Preposition", "purple"), ("Time", "Time expression", "amber")]),
    ],
    22: [  # Adverbs of Manner
        ("Formation", [("Adjective", "Base Adjective", "blue"), ("+ -ly", "Adverb Ending", "green")]),
    ],
    23: [  # Comparative
        ("Short adjectives", [("S1", "Subject 1", "blue"), ("is", "Verb", "green"), ("adjective + er", "Comparative", "amber"), ("than", "Compare word", "purple"), ("S2", "Subject 2", "blue")]),
        ("Long adjectives", [("S1", "Subject 1", "blue"), ("is", "Verb", "green"), ("more + adjective", "Comparative", "amber"), ("than", "Compare word", "purple"), ("S2", "Subject 2", "blue")]),
    ],
    24: [  # Superlative
        ("Short adjectives", [("S", "Subject", "blue"), ("is the", "Verb + the", "green"), ("adjective + est", "Superlative", "amber")]),
        ("Long adjectives", [("S", "Subject", "blue"), ("is the", "Verb + the", "green"), ("most + adjective", "Superlative", "amber")]),
    ],
    25: [  # Future: going to
        ("Affirmative", [("S", "Subject", "blue"), ("am/is/are going to", "To Be + going to", "green"), ("V (base)", "Verb base form", "amber")]),
    ],
    26: [  # Future: will
        ("Affirmative", [("S", "Subject", "blue"), ("will", "Modal Verb", "green"), ("V (base)", "Verb base form", "amber")]),
        ("Negative", [("S", "Subject", "blue"), ("won't", "Modal + not", "red"), ("V (base)", "Verb base form", "amber")]),
    ],
    27: [  # Modals must/should
        ("Obligation", [("S", "Subject", "blue"), ("must / have to", "Strong Obligation", "green"), ("V (base)", "Verb base form", "amber")]),
        ("Advice", [("S", "Subject", "blue"), ("should", "Advice", "green"), ("V (base)", "Verb base form", "amber")]),
    ],
    28: [  # Object pronouns
        ("Object position", [("S + Verb", "Subject + Verb", "blue"), ("me/you/him/her/it/us/them", "Object Pronoun", "amber")]),
    ],
    29: [  # Conjunctions
        ("Joining clauses", [("Clause 1", "First idea", "blue"), ("and/but/because/so", "Conjunction", "purple"), ("Clause 2", "Second idea", "amber")]),
    ],
    30: [  # Quantifiers
        ("Countable nouns", [("many/a few/some/any", "Quantifier", "purple"), ("Noun (plural)", "Countable Noun", "amber")]),
        ("Uncountable nouns", [("much/a little/some/any", "Quantifier", "purple"), ("Noun (uncountable)", "Uncountable Noun", "amber")]),
    ],
}

# JSON formatga aylantiramiz: formula = [[{part, label, color}, ...], ...], formula_labels = [label, ...]
output = {}
for day, rows in formulas.items():
    formula_labels = [label for label, _ in rows]
    formula = []
    for _, parts in rows:
        formula.append([{"part": p, "label": l, "color": c} for p, l, c in parts])
    output[day] = {"formula": formula, "formula_labels": formula_labels}

with open('/home/claude/ielts-mock/scripts/grammar_formulas.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"Tayyor: {len(output)} kun uchun formula")
for day in sorted(output.keys()):
    print(f"Kun {day}: {len(output[day]['formula'])} ta formula qatori")
