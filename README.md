# harryscully.com

My personal portfolio and hobby site, built with Next.js and Tailwind CSS.

## Built with

- Next.js 16 (App Router)
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
    ├── bookUtils.ts
    └── filmUtils.ts
scripts/
├── syncMedia.ts        # pulls films (Letterboxd RSS) and books (Goodreads RSS)
└── getMoviePoster.ts   # adds OMDB posters to films.json (needs OMDB_API_KEY)
```

## Syncing films and books

`.github/workflows/sync-media.yml` runs `npm run sync` daily and commits any changes to `src/data`, which triggers a redeploy. It can also be run manually from the Actions tab.

- **Films** — new entries from the Letterboxd RSS feed are merged into `films.json`. The feed only covers recent activity, so `films.json` is the archive.
- **Books** — `books.json` is rebuilt from the Goodreads RSS feed for the read shelf.

Needs a `GOODREADS_RSS_KEY` secret (the `key=` value from the Goodreads RSS link). To run locally, add it to `.env`.

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
