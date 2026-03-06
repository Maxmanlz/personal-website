export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Redux", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  },
  {
    name: "AI / ML",
    skills: ["RAG", "LLM Integration", "Prompt Engineering"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "OpenSearch", "Grafana", "Git", "CI/CD"],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Software Engineer I",
    org: "Cathexis @ C3.AI — Redwood City, CA",
    description:
      "Built and maintained core platform features unifying 20M+ law-enforcement records from disparate systems into a federated data image, enabling real-time cross-agency search and reducing investigator data-gathering time by >90%. Built geospatial analysis and dynamic visualisation tools, cutting crime pattern turnaround from four days to instant availability.",
  },
  {
    year: "2023",
    title: "Software Engineer",
    org: "Ocean View Leads LLC — San Diego, CA",
    description:
      "Developed an AI-powered legal document processing pipeline using Python and LLM models that reduced document review time by 90%. Built proof-of-concept prototypes using Python and REST APIs to validate new features before production deployment.",
  },
  {
    year: "2023",
    title: "B.S. Computer Science",
    org: "University of California, Santa Cruz",
    description:
      "Graduated with a Bachelor of Science in Computer Science. Capstone project: YouTube Comments Reborn — a Chrome extension reimplementing comment functionality on disabled comment sections.",
  },
];
