import films from "../data/films.json"

export function getFilmsByYear() {
    const filmsByYear: Record<string, typeof films> = {}
    
    for (const film of films) {
        const year = film.Date.split("-")[0]

        if (!filmsByYear[year]) {
            filmsByYear[year] = []
        }

        filmsByYear[year].push(film)
    }

    for (const year in filmsByYear) {
        // Dates are ISO (YYYY-MM-DD), so string comparison sorts chronologically
        filmsByYear[year].sort((a, b) => b.Date.localeCompare(a.Date))
    }

    return filmsByYear
}