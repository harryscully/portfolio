export interface CVEntry {
  title: string;
  companyOrInstitution: string;
  date: string;
  description: string;
  relevantTech?: string[];
}

export const job: CVEntry[] = [
  {
    title: "Software & Data Developer",
    companyOrInstitution: "Ugo Foods Group / Beyond Belief Brewing",
    date: "2023 - present",
    description:
      "Sole developer of HOPS, the brewery's CRM: rebuilt from Power Apps as a Next.js web app used daily by the sales and logistics teams, with Shopify, DHL and Microsoft 365 integrations. Also built an asset & job management platform for our engineering team, SQL databases, automation workflows, and reporting tools. Also contributed commercially — producing sales analysis, building data visualisation tools, and creating digital marketing campaigns.",
    relevantTech: ["Next.js", "TypeScript", "Prisma", "SQL Server", "Database design", "Power Apps", "Power Automate"],
  },
  {
    title: "Front of House",
    companyOrInstitution: "Barrio Comida",
    date: "2020 - 2023",
    description: "Waiter and bar staff at one of the UK's leading Mexican restaurants. Developed skills working under pressure in a fast-paced team environment.",
  },
]

export const education: CVEntry[] = [
  {
    title: "MSci Physics and Chemistry",
    companyOrInstitution: "Durham University",
    date: "2019 - 2023",
    description:
      "Integrated masters with a 2:1. Research on theoretical entanglement of cesium and strontium with applications to quantum computing and metrology.",
    relevantTech: ["Python", "Mathematical modelling", "Data analysis"]
  },
  {
    title: "A-Levels",
    companyOrInstitution: "Monk's Walk School",
    date: "2017 - 2019",
    description: "Physics, Chemistry, Mathematics (A*A*A*)"
  },
]