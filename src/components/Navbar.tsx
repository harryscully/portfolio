"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'

const links = [
    {href: '/', label: "About"},
    {href: '/projects', label: "Projects"},
    {href: '/cv', label: "CV"},
    {href: '/hobbies', label: "Hobbies"}
]

export default function Navbar() {
    const pathname = usePathname()
    const activeStyle = "text-green-600 font-bold"

    const linkElements = links.map( (link) => {
        const isActive =
            link.href === "/" ?
            pathname === link.href :
            pathname.startsWith(link.href) 

        return (
            <li key={link.href}>
                <Link 
                    href={link.href}
                    className={isActive ? activeStyle : ""}
                >
                    {link.label}
                </Link>
            </li>
        )
    })

    return (
        <nav>
            <ul className="flex flex-col gap-8">
                {linkElements}
            </ul>
        </nav>
    )
}