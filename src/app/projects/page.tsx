import { projects } from "@/data/projectData"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "projects"
}

export default function ProjectPage() {

    const projectsElements = projects.map((project) => (
        <section className="text-neutral-500 font-light" key={project.title}>
            <p>{project.date}</p>
            <h2 className="text-neutral-900 font-medium">
                <a href={project.url} className="hover:text-green-600" target="_blank">
                    {project.title}
                </a>
            </h2>
            <p>{project.description}</p>
            <p className="text-xs mt-1">({project.tech.join(", ")})</p>
        </section>
    ))

    return (
        <div className="flex flex-col w-full gap-8 md:w-130">
            <h1>Projects</h1>
            <p className="text-neutral-500 leading-7">A mix of personal projects and learning exercises - some built while working through courses, others just for fun.</p>
            <div className="flex flex-col gap-6 w-full md:w-130">
                {projectsElements}
            </div>
        </div>
    )
}