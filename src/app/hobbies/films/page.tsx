import Image from "next/image"
import { getFilmsByYear } from "../../../utils/filmUtils"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "films"
}

const filmsByYear = getFilmsByYear()

export default function Films() {
    const filmElements = Object.entries(filmsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, films]) => {
            return (
                <section key={year}>
                    <h2 className="my-6">{year}</h2>
                    <div className="grid grid-cols-10 gap-4">
                        {films.map(film => {
                            return (
                                <a key={film["Letterboxd URI"]} href={film["Letterboxd URI"]} target="_blank" title={film.Name}>
                                    <Image width={80} height={120} src={film?.poster ? film.poster : ""} alt={`film poster for ${film.Name}`} />
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })

    return (
        <div className="flex flex-col gap-8">
            <h1><Link className="hover:underline underline-offset-4 decoration-2" href="/hobbies">Hobbies</Link> / Films</h1>
            <div className="flex flex-col gap-4">
                {filmElements}
            </div>
        </div>
    )
}