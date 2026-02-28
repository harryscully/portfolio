import profilePic from "../../public/me.jpg"
import folderIcon from "../../public/directory-closed-5.png"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "harry scully",
  description: "Fullstack developer, quiz enthusiast, film watcher"
}

const links = [
  { href: "mailto:harrywscully9@gmail.com", label: "mail" },
  { href: "https://github.com/harryscully", label: "github" },
  { href: "https://www.linkedin.com/in/harry-scully/", label: "linkedin" },
  { href: "https://www.instagram.com/harrywscully/", label: "instagram" }
]

export default function Home() {
  const linkElements = links.map((link) => {
    return (
      <li className="flex gap-4 items-center" key={link.href}>
        <Image className="w-4 h-4" src={folderIcon} alt="folder windows 98 icon" />
        <a
          target="_blank"
          href={link.href}
          className="hover:text-green-600"
        >
          {link.label}
        </a>
      </li>
    )
  }
  )

  return (
    <div className="flex gap-16 justify-start">
      <div className="flex flex-col w-130 gap-8">
        <h1>About</h1>
        <ul className="flex gap-6">
          {linkElements}
        </ul>
        <p className="leading-7">
          Hi, I'm Harry — a fullstack developer from Welwyn Garden City with a master's in Physics and Chemistry from Durham University, which I'm reliably informed is useful preparation for writing JavaScript. By day I build internal tools and technologies for Ugo Foods Group and Beyond Belief Brewing - a brewery that makes craft beer from manufacturing surplus, including fresh pasta, brownies and flapjacks (to name a few). By night (and most lunchtimes) I'm probably thinking about a quiz question. I compete in the Quiz League of London and the Online Quiz League, and I won University Challenge with Durham as the highest scoring individual in the <a target="_blank" className="font-semibold underline decoration-wavy hover:text-yellow-400 transition-all duration-200" href="https://www.youtube.com/watch?v=5zeIHCfC2Vk">final!</a> Outside of work and quizzing, you'll find me at the cinema with my girlfriend, suffering at the gym, or making slow but genuine progress through my ever-growing reading list.
        </p>
      </div>
      <div className="w-60 my-20">
        <Image src={profilePic} alt="me" />
      </div>
    </div>
  );
}
