import films from "../../../data/films.json"
import Image from "next/image"

export default function Films() {

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

    const filmElements = Object.entries(filmsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, films]) => {
            return (
                <section key={year}>
                    <h2 className="my-6">{year}</h2>
                    <div className="grid grid-cols-10 gap-4">
                        {films.map(film => {
                            return (
                                <a href={film["Letterboxd URI"]} target="_blank" title={film.Name}>
                                    <Image key={film["Letterboxd URI"]} width={80} height={120} src={film?.poster ? film.poster : ""} alt={`film poster for ${film.Name}`} />
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })

    return (
         <div className="flex flex-col gap-8">
            <h1>Films</h1>
            <div className="flex flex-col gap-4">
                {filmElements}
            </div>
        </div>
    )
}