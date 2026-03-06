# harryscully.com

My personal portfolio and hobby site, built with Next.js and Tailwind CSS.

## Built with

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Structure
```
src/
├── app/
│   ├── cv/
│   ├── hobbies/
│   │   └── films/
│   │   └── books/
│   ├── projects/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navbar.tsx
├── data/
│   ├── books.json
│   ├── cvData.ts
│   ├── films.json
│   └── projectData.ts
└── utils/
    └── filmUtils.ts
```

## Pages

- **/** — About me
- **/projects** — Coding projects
- **/cv** — Work and education history
- **/hobbies/films** — Every film I've watched, organised by year
- **/hobbies/books** — Every book I've read, organised by year

## Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at localhost:3000 |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
