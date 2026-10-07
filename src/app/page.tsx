import profilePic from "../../public/me.jpg"
import folderIcon from "../../public/directory-closed-5.png"
import Image from "next/image"
import Link from "next/link"
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

const inlineLink = "underline underline-offset-4 decoration-neutral-300 hover:text-green-600 hover:decoration-green-600 transition-colors"

export default function Home() {
  const linkElements = links.map((link) => {
    return (
      <li className="flex gap-2 md:gap-4 items-center" key={link.href}>
        <Image className="w-4 h-4" src={folderIcon} alt="folder windows 98 icon" />
        <a
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
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
    <div className="flex flex-col w-full gap-16 md:flex-row md:justify-start">
      <div className="flex flex-col w-full max-w-xl gap-8">
        <h1>About</h1>
        <ul className="flex gap-4 md:gap-6">
          {linkElements}
        </ul>
        <div className="flex flex-col gap-4 leading-7">
          <p>
            Hi, I&apos;m Harry, a fullstack developer from Welwyn Garden City. I build internal tools for Beyond Belief Brewing, a brewery that turns food-manufacturing surplus (fresh pasta, brownies, flapjacks) into craft beer. My main project is <Link className={inlineLink} href="/projects/hops">HOPS</Link>, a CRM I built on my own that the brewery&apos;s sales and logistics teams use every day.
          </p>
          <p>
            Before that I did a master&apos;s in Physics and Chemistry at Durham, where I won University Challenge as the highest-scoring individual in the <a target="_blank" className="font-semibold underline decoration-wavy hover:text-yellow-400 transition-all duration-200" href="https://www.youtube.com/watch?v=5zeIHCfC2Vk">final!</a> I still compete in the Quiz League of London and the Online Quiz League, and most lunchtimes I&apos;m thinking about a quiz question.
          </p>
          <p>
            Otherwise, you&apos;ll find me at the <Link className={inlineLink} href="/hobbies/films">cinema</Link> with my girlfriend, suffering at the gym, or making slow progress through an ever-growing <Link className={inlineLink} href="/hobbies/books">reading list</Link>.
          </p>
        </div>
      </div>
      <div className="w-60 my-20 hidden md:block">
        <Image src={profilePic} alt="me" />
      </div>
    </div>
  );
}
