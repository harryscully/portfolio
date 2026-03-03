import Image from "next/image"
import { getBooksByYear } from "../../../utils/bookUtils"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "books"
}

const booksByYear = getBooksByYear()

export default function Books() {
    const bookElements = Object.entries(booksByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, books]) => {
            return (
                <section key={year}>
                    <h2 className="my-6">{year}</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                        {books.map(book => {
                            return (
                                <a key={book.book_id} href={book.link} target="_blank" title={book.title}>
                                    <Image className="w-full h-auto" width={80} height={120} src={book.book_large_image_url} alt={`film poster for ${book.title}`} />
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })

    return (
        <div className="flex flex-col gap-8 max-w-xl">
            <h1><Link className="hover:underline underline-offset-4 decoration-2" href="/hobbies">Hobbies</Link> / Books</h1>
            <div className="flex flex-col gap-4">
                {bookElements}
            </div>
        </div>
    )
}