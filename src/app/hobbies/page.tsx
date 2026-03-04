import movieIcon from "../../../public/cd_drive_purple-0.png"
import bookIcon from "../../../public/help-book-cool-3.png"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "hobbies"
}

export default function HobbiesPage() {
    return (
        <div className="flex flex-col w-full max-w-xl gap-8">
            <h1>Hobbies</h1>
            <div className="flex flex-col gap-6">
                <Link
                    className="flex items-center gap-4 p-4 border border-green-600 hover:bg-green-100 hover:text-green-600 transition-colors duration-200 cursor-pointer"
                    href="/hobbies/films"
                >
                    <Image className="h-8 w-8" src={movieIcon} alt="cd windows 98 icon" />
                    <div>
                        <h2 className="font-semibold text-xl">Films</h2>
                        <p className="text-sm">Everything I've watched, organised by year</p>
                    </div>
                </Link>
                <Link
                    className="flex items-center gap-4 p-4 border border-green-600 hover:bg-green-100 hover:text-green-600 transition-colors duration-200 cursor-pointer"
                    href="/hobbies/books"
                >
                    <Image className="h-8 w-8" src={bookIcon} alt="cd windows 98 icon" />
                    <div>
                        <h2 className="font-semibold text-xl">Books</h2>
                        <p className="text-sm">Everything I've read, organised by year</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}