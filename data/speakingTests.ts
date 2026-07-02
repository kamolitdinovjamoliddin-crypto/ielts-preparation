import { SpeakingTest } from "@/lib/types";

export const speakingTests: SpeakingTest[] = [
  {
    id: "speaking-test-1",
    title: "Speaking Practice Test 1",
    parts: [
      {
        id: "part-1",
        partNumber: 1,
        title: "Part 1: Introduction and Interview",
        prompt:
          "Let's talk about your hometown.\n\n1. Where is your hometown?\n2. What do you like most about it?\n3. Has it changed much since you were a child?\n4. Would you like to continue living there in the future?",
        speakSeconds: 240,
      },
      {
        id: "part-2",
        partNumber: 2,
        title: "Part 2: Long Turn (Cue Card)",
        prompt: "Describe a skill you would like to learn in the future.",
        cueCard: {
          topic: "Describe a skill you would like to learn in the future.",
          bulletPoints: [
            "What the skill is",
            "Why you want to learn it",
            "How you would learn it",
            "And explain how this skill might change your life",
          ],
        },
        prepSeconds: 60,
        speakSeconds: 120,
      },
      {
        id: "part-3",
        partNumber: 3,
        title: "Part 3: Discussion",
        prompt:
          "Let's discuss skills and learning more generally.\n\n1. Do you think it's more important to learn practical skills or academic knowledge?\n2. How has technology changed the way people learn new skills?\n3. Do you think some skills will become unnecessary in the future because of AI and automation?\n4. Should schools focus more on teaching life skills rather than traditional subjects?",
        speakSeconds: 300,
      },
    ],
  },
];
