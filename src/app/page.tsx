const links = [
  {href: "mailto:harrywscully9@gmail.com", label: "mail"},
  {href: "https://github.com/harryscully", label: "github"},
  {href: "https://www.linkedin.com/in/harry-scully/", label: "linkedin"},
  {href: "https://www.instagram.com/harrywscully/", label: "instagram"}
]

export default function Home() {
  const linkElements = links.map((link) => {
    return (
      <li key={link.href}>
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
    <div className="flex flex-col gap-8">
      <h1>About</h1>
      <ul className="flex gap-6">
        {linkElements}
      </ul>
      <p>Hi, my name is Harry, I'm 25 years old and I come from Welwyn Garden City. I'm a fullstack developer with a master's degree in Physics and Chemistry from Durham University. I currently work for Ugo Foods Group and Beyond Belief Brewing, developing internal technologies. In my free time, I competitively quiz in the Quiz League of London and Online Quiz League. I also enjoy going to the cinema with my girlfriend and going to the gym. Trying to read more books too!
      </p>
    </div>
  );
}
