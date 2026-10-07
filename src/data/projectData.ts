type Project = {
  title: string,
  url: string,
  date: string,
  description: string,
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "HOPS",
    url: "/projects/hops",
    date: "2025 – present",
    description: "A CRM for a craft brewery, used daily by its sales and logistics teams. Connected to Shopify, DHL and Microsoft 365.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQL Server"]
  },
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
    description: "The site you're looking at. Films and books sync automatically from Letterboxd and Goodreads through a daily GitHub Action that reads their RSS feeds and commits any changes.",
    tech: ["Next.js", "TypeScript", "Tailwind", "GitHub Actions"]
  }
]