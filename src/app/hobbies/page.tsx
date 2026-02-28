import movieIcon from "../../../public/cd_drive_purple-0.png"
import Image from "next/image"
import Link from "next/link"

export default function HobbiesPage() {
    return (
        <div className="flex flex-col gap-6 w-120">
            <Link className="flex justify-start gap-4" href="/hobbies/films">
                <Image className="h-8 w-8" src={movieIcon} alt="cd windows 98 icon" />
                <h2 className="font-semibold text-xl">Films</h2>
            </Link>
        </div>
    )
}