export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "This site — built with Next.js, Tailwind CSS, and Framer Motion. Self-hosted on Ubuntu behind Nginx.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/maxmanlz/personal-website",
    featured: true,
  },
  {
    title: "Art Portfolio Website",
    description:
      "A fully responsive art portfolio built with Next.js and Tailwind CSS. Uses Supabase (PostgreSQL) for artwork metadata, user authentication, and real-time data. Deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Supabase", "Docker"],
    github: "https://github.com/maxmanlz/art-portfolio",
    featured: true,
  },
  {
    title: "YouTube Comments Reborn",
    description:
      "Capstone project — a Chrome extension that reimplemented YouTube comment functionality on videos with disabled comment sections by querying a custom database. Removed from the web store by the team due to ethical considerations.",
    tags: ["Chrome Extension", "JavaScript", "PostgreSQL"],
    github: "https://github.com/maxmanlz/youtube-comments-reborn",
  },
];
