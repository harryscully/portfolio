import booksData from "../data/books.json"

type Book = (typeof booksData.channel.item)[number]

export function getBooksByYear() {
    const books = booksData.channel.item
    const booksByYear: Record<string, Book[]> = {}

    for (const book of books) {
        if (!book.user_read_at) continue

        const date = new Date(book.user_read_at)
        if (isNaN(date.getTime())) continue

        const year = date.getFullYear().toString()

        if (!booksByYear[year]) {
            booksByYear[year] = []
        }

        booksByYear[year].push(book)
    }

    for (const year in booksByYear) {
        booksByYear[year].sort((a, b) => {
            return new Date(b.user_read_at).getTime() - new Date(a.user_read_at).getTime()
        })
    }

    return booksByYear
}