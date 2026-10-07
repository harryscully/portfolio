// this script pulls recent films from Letterboxd and read books from Goodreads via their RSS feeds
// run by .github/workflows/sync-media.yml - needs GOODREADS_RSS_KEY (the key= value from the Goodreads RSS link)

import "dotenv/config"
import { readFileSync, writeFileSync } from "fs"
import { XMLParser } from "fast-xml-parser"

const LETTERBOXD_USER = "harry9"
const GOODREADS_USER_ID = "128971704"
const FILMS_PATH = "src/data/films.json"
const BOOKS_PATH = "src/data/books.json"

type Film = {
  Date: string
  Name: string
  Year: number
  "Letterboxd URI": string
  poster?: string | null
}

type RssItem = Record<string, string | undefined>

const parser = new XMLParser({
  parseTagValue: false,
  htmlEntities: true, // Letterboxd titles use &#039; for apostrophes
  isArray: (name) => name === "item"
})

async function fetchItems(url: string): Promise<RssItem[]> {
  const res = await fetch(url, { headers: { "User-Agent": "harryscully.com media sync" } })
  // strip the query string so the Goodreads key never ends up in logs
  if (!res.ok) throw new Error(`${url.split("?")[0]} returned ${res.status}`)
  return parser.parse(await res.text()).rss.channel.item ?? []
}

// the Letterboxd feed only has the latest ~50 entries, so new films are merged into the existing list
async function syncFilms() {
  const films: Film[] = JSON.parse(readFileSync(FILMS_PATH, "utf8"))
  const filmKey = (film: Film) => `${film.Name}|${film.Year}`
  const seen = new Set(films.map(filmKey))

  const items = await fetchItems(`https://letterboxd.com/${LETTERBOXD_USER}/rss/`)
  let added = 0

  // feed is newest first - go oldest first so a film keeps the date of its first watch
  for (const item of [...items].reverse()) {
    const name = item["letterboxd:filmTitle"]
    const date = item["letterboxd:watchedDate"]
    if (!name || !date) continue // lists and undated entries

    const film: Film = {
      Date: date,
      Name: name,
      Year: Number(item["letterboxd:filmYear"]),
      "Letterboxd URI": item.link ?? "",
      poster: item.description?.match(/<img src="([^"]+)"/)?.[1] ?? null
    }

    if (seen.has(filmKey(film))) continue
    seen.add(filmKey(film))
    films.push(film)
    added++
  }

  if (added > 0) writeFileSync(FILMS_PATH, JSON.stringify(films, null, 2))
  console.log(`Films: ${added} added (${films.length} total)`)
}

// the Goodreads feed has the whole read shelf, so books.json is rebuilt from it each time
async function syncBooks() {
  const key = process.env.GOODREADS_RSS_KEY
  if (!key) throw new Error("GOODREADS_RSS_KEY is not set")

  const items: RssItem[] = []
  for (let page = 1; page <= 20; page++) {
    const pageItems = await fetchItems(
      `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?key=${key}&shelf=read&page=${page}`
    )
    if (pageItems.length === 0) break
    items.push(...pageItems)
  }

  const books = items
    .filter(item => item.user_read_at)
    .map(item => ({
      id: item.book_id ?? "",
      title: item.title ?? "",
      author: item.author_name ?? "",
      cover: item.book_large_image_url ?? "",
      readAt: new Date(item.user_read_at!).toISOString().slice(0, 10)
    }))
    .sort((a, b) => b.readAt.localeCompare(a.readAt))

  // don't wipe the list if Goodreads returns an empty feed
  if (books.length === 0) throw new Error("Goodreads returned no read books")

  writeFileSync(BOOKS_PATH, JSON.stringify(books, null, 2) + "\n")
  console.log(`Books: ${books.length} read`)
}

async function main() {
  // run both so one feed being down doesn't block the other, but still fail the run
  const results = await Promise.allSettled([syncFilms(), syncBooks()])
  for (const result of results) {
    if (result.status === "rejected") {
      console.error(result.reason)
      process.exitCode = 1
    }
  }
}

main()
