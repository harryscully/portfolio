type Project = {
    title: string,
    url: string,
    date: string,
    description: string,
    tech: string[]
}

export const projects: Project[] = [
    {
    title: "harryscully.com",
    url: "https://harryscully.com",
    date: "2026 – present",
    description: "The site you're looking at. Personal portfolio and hobby site.",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Quiz App",
    url: "https://harryscully.github.io/quiz-app",
    date: "2026",
    description: "My first React project — a multiple choice trivia app fetching questions from the Open Trivia DB API, with confetti on a perfect score.",
    tech: ["React", "JavaScript"]
  },
  {
    title: "Colour Generator",
    url: "https://harryscully.github.io/colour-generator",
    date: "2025",
    description: "Generates colour schemes from a picked colour using The Color API. Click any colour to copy its hex code.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Etch-a-Sketch",
    url: "https://harryscully.github.io/etch-a-sketch",
    date: "2025",
    description: "Browser-based drawing toy with rainbow mode, opacity mode and adjustable grid size up to 64x64.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Rock Paper Scissors",
    url: "https://harryscully.github.io/rock-paper-scissors",
    date: "2025",
    description: "Classic game against the computer. First to 5 wins.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
]