export interface CVEntry {
  title: string;
  companyOrInstitution: string;
  date: string;
  description: string;
  relevantTech?: string[];
}

export const education: CVEntry[] = [
  {
    title: "MSci Physics and Chemistry",
    companyOrInstitution: "Durham University",
    date: "2019 - 2023",
    description:
      "Integrated masters. Research on theoretical entanglement of cesium and strontium with applications to quantum computing and metrology.",
    relevantTech: ["Python", "Mathematical modelling", "Data analysis"]
  },
  {
    title: "A-Levels",
    companyOrInstitution: "Monk’s Walk School",
    date: "2017 - 2019",
    description: "Physics, Chemistry, Mathematics (A*A*A*)"
  },
];

export const job: CVEntry[] = [
  {
    title: "Software & Data Developer",
    companyOrInstitution: "Ugo Food Group / Beyond Belief Brewing",
    date: "2023 - present",
    description:
      "Designed and built internal systems including an asset & job management platform for our engineering team and a CRM tool for the brewery sales team. Developed SQL databases, automation workflows, and reporting tools. Strong focus on good UI/UX design.",
    relevantTech:
      ["SQL", "Database design", "Power Apps", "Power Automate", "CRM systems", "Automation"],
  },
  {
    title: "Front of House",
    companyOrInstitution: "Barrio Comida",
    date: "2020 - 2023",
    description:
      "Worked in a high-paced service environment.",
    relevantTech: ["Teamwork", "Customer Service"],
  },
];