import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { skillCategories, timeline } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "About me — background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
          About Me
        </h1>
        <div className="h-1 w-12 rounded bg-[var(--accent)] mb-10" />
      </AnimatedSection>

      {/* Bio */}
      <div className="grid md:grid-cols-[1fr_auto] gap-12 mb-20">
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col gap-4 text-[#b0b0c0] leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-[var(--foreground)] font-semibold">Rodrigo Lizalde Sanchez</span> — a
              full-stack software engineer with a passion for building reliable,
              well-crafted software across the entire stack.
            </p>
            <p>
              I work primarily in JavaScript/TypeScript and Python, with experience
              in React, Node.js, PostgreSQL, and AI/LLM integration. I enjoy
              everything from designing data pipelines to shipping polished UIs.
              Fluent in English and Spanish, with intermediate Mandarin Chinese.
            </p>
            <p>
              Outside of work I&apos;m into board games, Magic: the Gathering,
              video games, and homelabbing. This site runs off my own Ubuntu
              server — just for fun.
            </p>
          </div>
        </AnimatedSection>

        {/* Avatar placeholder */}
        <AnimatedSection delay={0.2} className="flex justify-center md:justify-end">
          <div className="w-40 h-40 rounded-2xl border-2 border-[var(--border)] bg-[#111120] flex items-center justify-center text-4xl text-[var(--muted)]">
            RLS
          </div>
        </AnimatedSection>
      </div>

      {/* Skills */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Skills</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.name} delay={0.1 + i * 0.07}>
            <div className="rounded-xl border border-[var(--border)] bg-[#0e0e1a] p-5">
              <h3 className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-4">
                {cat.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-[var(--muted)]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Timeline */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Timeline</h2>
      </AnimatedSection>

      <div className="relative flex flex-col gap-0">
        {/* Vertical line */}
        <div className="absolute left-[5.5rem] top-2 bottom-2 w-px bg-[var(--border)]" />

        {timeline.map((entry, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.1} className="flex gap-6 pb-10 last:pb-0">
            {/* Year */}
            <span className="w-16 shrink-0 text-right text-xs font-mono text-[var(--accent)] pt-1">
              {entry.year}
            </span>
            {/* Dot */}
            <div className="relative flex items-start">
              <span className="mt-1.5 w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] shrink-0 z-10" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-1 pl-2">
              <p className="font-semibold text-[var(--foreground)]">{entry.title}</p>
              <p className="text-xs text-[var(--accent)] font-mono">{entry.org}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">
                {entry.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
