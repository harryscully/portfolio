import { job, education } from "@/data/cvData"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "cv"
}

export default function CVPage() {

    const jobElements = job.map((entry) => (
        <section className="text-neutral-500 font-light" key={entry.title}>
            <p>{entry.date}</p>
            <h2 className="text-neutral-900 font-medium">
                {entry.title}, {entry.companyOrInstitution}
            </h2>
            <p>{entry.description}</p>
            {entry.relevantTech && <p className="text-xs mt-1">
                ({entry.relevantTech.join(", ")})
            </p>}
        </section>
    ))

    const educationElements = education.map((entry) => (
        <section className="text-neutral-500 font-light" key={entry.title}>
            <p>{entry.date}</p>
            <h2 className="text-neutral-900 font-medium">
                {entry.title}, {entry.companyOrInstitution}
            </h2>
            <p>{entry.description}</p>
            {entry.relevantTech && <p className="text-xs mt-1">
                ({entry.relevantTech.join(", ")})
            </p>}
        </section>
    ))

    return (
        <div className="flex flex-col w-full gap-10 md:w-130">
            <h1>CV</h1>

            <div className="flex flex-col gap-6">
                <h2 className="text-lg">Work</h2>
                {jobElements}
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="text-lg">Education</h2>
                {educationElements}
            </div>
        </div>
    )
}