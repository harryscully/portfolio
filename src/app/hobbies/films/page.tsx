import films from "../../../data/films.json"
import Image from "next/image"

export default function Films() {

    const filmsByYear: Record<string, typeof films> = {}

    for (const film of films) {
        const year = film.Date.split("/")[2]

        if (!filmsByYear[year]) {
            filmsByYear[year] = []
        }

        filmsByYear[year].push(film)
    }

    const filmElements = Object.entries(filmsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, films]) => {
            return (
                <section key={year}>
                    <h2>{year}</h2>
                    <div className="grid grid-cols-10 gap-4">
                        {films.map(film => {
                            return (
                                <Image key={film["Letterboxd URI"]} width={80} height={120} src={film?.poster ? film.poster : ""} alt={`film poster for ${film.Name}`} />
                            )
                        })}
                    </div>
                </section>
            )
        })

    return (
        <div>
            <h2>Films</h2>
            <div className="flex flex-col gap-4">
                {filmElements}
            </div>
        </div>
    )
}