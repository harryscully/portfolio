type Project = {
  title: string,
  url: string,
  date: string,
  description: string,
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "Task Dashboard",
    url: "https://task-dashboard-green-one.vercel.app/",
    date: "2026",
    description: "A task management application using Kanban board. Live charts on the dashboard that respond to the state of the board",
    tech: ["Next.js", "TypeScript", "dnd-kit", "Recharts"]
  },
  {
    title: "Book Tracker",
    url: "https://book-tracker-blue.vercel.app/",
    date: "2026",
    description: "A full-stack CRUD app in Next.js. Built to learn TanStack Query, React Hook Form, and Zod validation patterns",
    tech: ["Next.js", "TypeScript", "TanStack Query", "React Hook Form", "Zod", "Prisma", "DaisyUI"]
  },
  {
    title: "Authentication app",
    url: "https://auth-app-seven-beryl.vercel.app/",
    date: "2026",
    description: "A learning project exploring authentication in Next.js. Built to understand auth patterns.",
    tech: ["Auth.js","Shadcn/ui","Prisma"]
  },
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