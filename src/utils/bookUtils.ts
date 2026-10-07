import books from "../data/books.json"

type Book = (typeof books)[number]

export function getBooksByYear() {
    const booksByYear: Record<string, Book[]> = {}

    // books.json is already sorted newest first by scripts/syncMedia.ts
    for (const book of books) {
        const year = book.readAt.split("-")[0]

        if (!booksByYear[year]) {
            booksByYear[year] = []
        }

        booksByYear[year].push(book)
    }

    return booksByYear
}
