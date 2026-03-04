import movieIcon from "../../../public/cd_drive_purple-0.png"
import bookIcon from "../../../public/help-book-cool-3.png"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "hobbies"
}

const hobbiesData = [{
    name: "films",
    displayName: "Films",
    subtitle: "Everything I've watched",
    color: "green",
    icon: movieIcon,
    alt: "cd windows 98 icon"
},
{
    name: "books",
    displayName: "Books",
    subtitle: "Everything I've read",
    color: "violet",
    icon: bookIcon,
    alt: "help book windows 98 icon"
}]

export default function HobbiesPage() {

    const hobbieLinks = hobbiesData.map((item) => (
        <Link
            key={item.name}
            className={`flex items-center gap-4 p-4 hover:bg-${item.color}-100 hover:text-${item.color}-600 transition-colors duration-200 cursor-pointer`}
            href={`/hobbies/${item.name}`}
        >
            <Image className="h-8 w-8" src={item.icon} alt={item.alt} />
            <div>
                <h2 className="font-semibold text-xl">{item.displayName}</h2>
                <p className="text-sm">{item.subtitle}</p>
            </div>
        </Link>
    ))

    return (
        <div className="flex flex-col w-full max-w-xl gap-8">
            <h1>Hobbies</h1>
            <div className="flex flex-col gap-2">
                {hobbieLinks}
            </div>
        </div>
    )
}