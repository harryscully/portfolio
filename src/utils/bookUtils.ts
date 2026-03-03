import books from "../data/books.json"

export function getBooksByYear() {
    const booksByYear: Record<string, typeof books> = {}
    
    for (const book of books) {
        const year = book["Date Read"].split("/")[2]

        if (!booksByYear[year]) {
            booksByYear[year] = []
        }

        booksByYear[year].push(book)
    }

    for (const year in booksByYear) {
        booksByYear[year].sort((a, b) => {
            const [aDay, aMonth, aYear] = a["Date Read"].split("/")
            const [bDay, bMonth, bYear] = b["Date Read"].split("/")
            return new Date(`${bYear}-${bMonth}-${bDay}`).getTime() -
                new Date(`${aYear}-${aMonth}-${aDay}`).getTime()
        })
    }

    return booksByYear
}