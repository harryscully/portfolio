import React from "react"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/cv">CV</Link></li>
                <li><Link href="/hobbies">Hobbies</Link></li>
            </ul>
        </nav>
    )
}