import films from "../data/films.json"

export function getFilmsByYear() {
    const filmsByYear: Record<string, typeof films> = {}
    
    const filmsWithPosters = films.filter(film => film.poster)
    
    for (const film of filmsWithPosters) {
        const year = film.Date.split("/")[2]

        if (!filmsByYear[year]) {
            filmsByYear[year] = []
        }

        filmsByYear[year].push(film)
    }

    for (const year in filmsByYear) {
        filmsByYear[year].sort((a, b) => {
            const [aDay, aMonth, aYear] = a.Date.split("/")
            const [bDay, bMonth, bYear] = b.Date.split("/")
            return new Date(`${bYear}-${bMonth}-${bDay}`).getTime() -
                new Date(`${aYear}-${aMonth}-${aDay}`).getTime()
        })
    }

    return filmsByYear
}