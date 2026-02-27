import React from "react"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Projects</Link></li>
                <li><Link href="#">CV</Link></li>
                <li><Link href="#">Hobbies</Link></li>
            </ul>
        </nav>
    )
}