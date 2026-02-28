// this script adds the movie posters from OMDB from the letterboxd manual export

import "dotenv/config"
import { writeFileSync } from "fs"
import films from "../src/data/films.json"

const OMDB_API_KEY = process.env.OMDB_API_KEY

async function getPosters() {
  const filmsWithPosters = await Promise.all(films.map(async (film) => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(film.Name)}&apikey=${OMDB_API_KEY}`
    )
    const data = await res.json()

    return {
      ...film,
      poster: data.Poster !== "N/A" ? data.Poster : null
    }
  }))

  writeFileSync("src/data/films.json", JSON.stringify(filmsWithPosters, null, 2))
  console.log(`Done! ${filmsWithPosters.length} films enriched`)
}

getPosters()