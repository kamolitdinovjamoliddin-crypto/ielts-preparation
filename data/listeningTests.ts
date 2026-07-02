import { ListeningTest } from "@/lib/types";

export const listeningTests: ListeningTest[] = [
  {
    id: "listening-test-1",
    title: "Listening Practice Test 1",
    durationMinutes: 30,
    sections: [
      {
        id: "section-1",
        title: "Section 1: Booking a Hotel Room",
        transcript: `Receptionist: Good morning, Lakeside Hotel, how can I help you?
Customer: Hi, I'd like to book a room for next weekend, please.
Receptionist: Sure, what dates exactly?
Customer: Check-in on Friday the 14th, and check-out on Sunday the 16th.
Receptionist: Okay, that's two nights. Would you like a single or double room?
Customer: A double room, please. My partner and I are visiting for an anniversary.
Receptionist: Congratulations! We have a double room with a lake view available for 95 dollars per night.
Customer: That sounds great. Is breakfast included?
Receptionist: Yes, breakfast is included, and we also offer a free shuttle service to the city centre.
Customer: Perfect. Could I get a late checkout? We'd like to leave around 2 PM if possible.
Receptionist: Late checkout until 2 PM is available for an extra 20 dollars.
Customer: That's fine, I'll take it. Can I pay with a credit card?
Receptionist: Yes, of course. Can I get your name and phone number to confirm the booking?
Customer: My name is Robert Klein, and my number is 555-0192.
Receptionist: Great, Mr Klein, you're all booked in. We look forward to seeing you on the 14th.`,
        questions: [
          {
            id: "l1-q1",
            type: "fill-blank",
            text: "Check-in date: Friday the ______",
            correctAnswer: ["14th", "14"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l1-q2",
            type: "fill-blank",
            text: "Room type booked: ______ room with a lake view",
            correctAnswer: ["double"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l1-q3",
            type: "fill-blank",
            text: "Price per night: $______",
            correctAnswer: ["95"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l1-q4",
            type: "multiple-choice",
            text: "What free service does the hotel offer?",
            options: ["Spa access", "Shuttle service to the city centre", "Airport pickup", "Bicycle rental"],
            correctAnswer: "Shuttle service to the city centre",
          },
          {
            id: "l1-q5",
            type: "fill-blank",
            text: "Extra cost for late checkout: $______",
            correctAnswer: ["20"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l1-q6",
            type: "fill-blank",
            text: "Customer's surname: ______",
            correctAnswer: ["Klein"],
            wordLimit: "ONE WORD ONLY",
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2: Campus Library Orientation",
        transcript: `Good afternoon, everyone, and welcome to Greenfield University Library. My name is Sarah, and I'll be giving you a quick orientation today. 

The library is open from 8 AM to 11 PM on weekdays, and from 9 AM to 6 PM on weekends. We have four floors. The ground floor houses the main reception, the café, and group study rooms which can be booked online up to one week in advance. 

The first floor is dedicated to Social Sciences and Humanities. You'll find quiet study areas there, and silence is strictly enforced. The second floor contains our Science and Engineering collection, along with a computer lab that's available for student use. The top floor, the third floor, is reserved for postgraduate researchers only, and requires a special access card.

Regarding borrowing rules, undergraduate students may borrow up to eight books at a time, for a period of three weeks. Postgraduate students can borrow up to fifteen books for four weeks. Books can be renewed twice online, provided no one else has requested them.

If you lose a book, there is a replacement fee of 25 dollars per item, plus a processing fee of 5 dollars. Please also note that the library has a strict food policy: drinks in covered containers are allowed, but food is only permitted in the ground floor café area.

Finally, if you need help with research, our subject librarians offer one-on-one consultations, which can be booked through the library website.`,
        questions: [
          {
            id: "l2-q1",
            type: "fill-blank",
            text: "Weekday opening hours: 8 AM to ______ PM",
            correctAnswer: ["11"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l2-q2",
            type: "multiple-choice",
            text: "Which floor is for Science and Engineering?",
            options: ["Ground floor", "First floor", "Second floor", "Third floor"],
            correctAnswer: "Second floor",
          },
          {
            id: "l2-q3",
            type: "fill-blank",
            text: "Undergraduate borrowing limit: ______ books",
            correctAnswer: ["8", "eight"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l2-q4",
            type: "fill-blank",
            text: "Postgraduate borrowing period: ______ weeks",
            correctAnswer: ["4", "four"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l2-q5",
            type: "fill-blank",
            text: "Replacement fee for a lost book: $______",
            correctAnswer: ["25"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l2-q6",
            type: "true-false-not-given",
            text: "Food is allowed anywhere in the library.",
            correctAnswer: "False",
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3: Discussion on a Research Project",
        transcript: `Tutor: So, Maria and James, how is your joint research project on renewable energy adoption coming along?
Maria: It's going well, I think. We've finished the literature review, and we're now designing our survey questions.
Tutor: Good. What's the main focus of your survey?
James: We want to understand public attitudes towards solar panel installation in residential areas, specifically what barriers prevent people from installing them.
Tutor: That's a strong angle. Have you considered the sample size?
Maria: We're aiming for at least 200 respondents, mostly homeowners in suburban areas.
Tutor: That should give you a reasonably robust dataset. James, what about the cost barrier? Are you planning to ask about that specifically?
James: Yes, we have a whole section on financial concerns, including upfront costs and payback periods.
Tutor: Excellent. One suggestion: you might also want to ask about awareness of government subsidies, since many people don't install solar panels simply because they don't know financial support is available.
Maria: That's a great point, we hadn't thought of that.
Tutor: I'd also recommend piloting your survey with a small group first, maybe ten people, to catch any confusing questions before the full rollout.
James: Good idea. We can do that next week.
Tutor: When is your final report due?
Maria: In six weeks. We're hoping to have all the data collected within the next three weeks, leaving time for analysis.`,
        questions: [
          {
            id: "l3-q1",
            type: "short-answer",
            text: "What is the topic of Maria and James's research project?",
            correctAnswer: ["renewable energy adoption", "solar panel installation"],
            wordLimit: "NO MORE THAN TWO WORDS",
          },
          {
            id: "l3-q2",
            type: "fill-blank",
            text: "Target sample size: at least ______ respondents",
            correctAnswer: ["200"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l3-q3",
            type: "multiple-choice",
            text: "What does the tutor suggest adding to the survey?",
            options: [
              "Questions about solar panel brands",
              "Questions about awareness of government subsidies",
              "Questions about electricity bills only",
              "Questions about internet usage",
            ],
            correctAnswer: "Questions about awareness of government subsidies",
          },
          {
            id: "l3-q4",
            type: "fill-blank",
            text: "Recommended pilot group size: ______ people",
            correctAnswer: ["10", "ten"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l3-q5",
            type: "fill-blank",
            text: "Final report is due in ______ weeks",
            correctAnswer: ["6", "six"],
            wordLimit: "ONE WORD ONLY",
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4: Lecture on Ocean Currents",
        transcript: `Today's lecture focuses on ocean currents and their critical role in regulating global climate. Ocean currents can be broadly divided into two categories: surface currents, which are driven primarily by wind, and deep water currents, which are driven by differences in water density caused by variations in temperature and salinity.

One of the most significant current systems is the global conveyor belt, sometimes called the thermohaline circulation. This system transports warm water from the equator towards the poles at the surface, while cold, dense water sinks and flows back towards the equator at depth. This process is crucial for distributing heat around the planet.

The Gulf Stream is perhaps the most well-known example of a surface current. It carries warm water from the Gulf of Mexico across the Atlantic towards Western Europe, which is partly why countries like the United Kingdom have a milder climate than other locations at similar latitudes, such as parts of Canada.

Scientists have raised concerns that climate change could disrupt these current systems. As polar ice melts, large amounts of fresh water enter the ocean, reducing the salinity and density of surface water in these regions. Since the conveyor belt relies on dense water sinking, a significant influx of fresh water could slow or even halt this circulation pattern, with potentially severe consequences for global weather patterns.

Research using ocean buoys and satellite data has shown some early signs of weakening in parts of this system, though scientists caution that more long-term data is needed before drawing definitive conclusions. Monitoring programs are now being expanded to track these changes more closely over the coming decades.`,
        questions: [
          {
            id: "l4-q1",
            type: "multiple-choice",
            text: "What primarily drives surface currents?",
            options: ["Salinity", "Wind", "Temperature only", "Tides"],
            correctAnswer: "Wind",
          },
          {
            id: "l4-q2",
            type: "short-answer",
            text: "What is another name for the global conveyor belt?",
            correctAnswer: ["thermohaline circulation"],
            wordLimit: "NO MORE THAN TWO WORDS",
          },
          {
            id: "l4-q3",
            type: "true-false-not-given",
            text: "The Gulf Stream carries cold water towards Europe.",
            correctAnswer: "False",
          },
          {
            id: "l4-q4",
            type: "fill-blank",
            text: "Melting polar ice reduces the ______ of surface water.",
            correctAnswer: ["salinity", "density"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "l4-q5",
            type: "true-false-not-given",
            text: "Scientists are completely certain the conveyor belt is weakening.",
            correctAnswer: "False",
          },
        ],
      },
    ],
  },
];
