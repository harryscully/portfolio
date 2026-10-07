import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HOPS",
    description: "Case study: HOPS, a CRM for a craft brewery, built with Next.js, TypeScript, Prisma and SQL Server"
}

const features = [
    "leads and deals move through a sales pipeline",
    "sample requests are tracked through approval, delivery and outcome",
    "trade and online orders sit in one place",
    "quotes and invoices are generated as PDFs",
    "live stock comes from the warehouse system",
    "tasks, notifications and reports tie it together"
]

const integrations = [
    "Online orders arrive from Shopify by webhook. Marking an order as sent pushes tracking back and completes it in Shopify, which triggers the customer's shipping email.",
    "DHL tracking marks samples as received automatically.",
    "Microsoft Graph scans the shared enquiries inbox for people and companies not yet in the CRM and suggests them as leads.",
    "Files are archived to SharePoint.",
    "Scheduled jobs send each person a single morning email, which replaced five separate daily ones, and managers get a summary on Mondays."
]

const adoptionChanges = [
    "capture data automatically instead of adding more forms (DHL marks samples received; won deals flag the company as a customer)",
    "create follow-up tasks at the moment they're needed",
    "cut email noise so the emails that remain get read",
    "add in-app tours, help guides and a What's New page",
    "add a roadmap the team can vote on, so feedback visibly goes somewhere"
]

const stack = [
    "Next.js 16 (App Router), React 19, TypeScript",
    "Prisma on SQL Server",
    "Microsoft sign-in with role-based permissions",
    "shadcn/ui, Recharts, react-pdf",
    "cron-scheduled jobs for emails and syncs",
    "hosted on an Azure VM as a Windows service behind a Cloudflare tunnel"
]

function List({ items }: { items: string[] }) {
    return (
        <ul className="list-disc pl-5 flex flex-col gap-1">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default function HopsPage() {
    return (
        <article className="flex flex-col w-full gap-8 max-w-xl leading-7">
            <div className="flex flex-col gap-2">
                <h1><Link className="hover:underline underline-offset-4 decoration-2" href="/projects">Projects</Link> / HOPS</h1>
                <p className="text-neutral-500 font-light">A CRM for a brewery</p>
                <p className="text-neutral-500 font-light text-sm">
                    2025 – present · Beyond Belief Brewing · Next.js, TypeScript, Prisma, SQL Server
                </p>
            </div>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg">The problem</h2>
                <p>
                    Beyond Belief Brewing makes craft beer from food-manufacturing surplus and sells it to pubs, bars, shops and online. Leads, samples, deals and orders were tracked in spreadsheets, emails and reps&apos; heads.
                </p>
                <p>
                    I first built HOPS in Power Apps. It was slow, which frustrated people and held back adoption, it was slow to develop, and it was badly limited when it came to connecting with outside systems. So in June 2026 I rebuilt it as a full-stack web app.
                </p>
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg">What it does</h2>
                <p>HOPS follows a customer from first contact to repeat order:</p>
                <List items={features} />
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg">Connected to everything else</h2>
                <List items={integrations} />
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg">The interesting part: getting people to use it</h2>
                <p>
                    A few months in, I audited usage against the live data. Samples and products were used every day, but the sales pipeline barely was: most open deals hadn&apos;t been touched in months, and most samples had no follow-up recorded. I&apos;d been building the features people asked for, not ones that changed how they worked.
                </p>
                <p>So I changed what I was measuring, from features shipped to features used:</p>
                <List items={adoptionChanges} />
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg">How it&apos;s built</h2>
                <List items={stack} />
                <p>
                    I&apos;m the sole developer. I gather requirements directly from the sales and logistics teams and ship in small releases, with 10+ people using it daily.
                </p>
            </section>
        </article>
    )
}
