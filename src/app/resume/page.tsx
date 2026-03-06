import type { Metadata } from "next";
import { Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { timeline, skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "My resume — experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimatedSection className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Resume</h1>
          <div className="h-1 w-12 rounded bg-[var(--accent)]" />
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)] transition-colors"
        >
          <Download size={14} />
          Download PDF
        </a>
      </AnimatedSection>

      {/* Name & contact */}
      <AnimatedSection delay={0.05} className="mb-10 pb-8 border-b border-[var(--border)]">
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-1">Rodrigo Lizalde Sanchez</h2>
        <p className="text-[var(--accent)] font-mono text-sm mb-4">Software Engineer</p>
        <div className="flex flex-wrap gap-4 text-xs text-[var(--muted)] font-mono">
          <span>rlizalde7@gmail.com</span>
          <span>github.com/maxmanlz</span>
          <span>linkedin.com/in/rodrigo-lizalde-sanchez</span>
          <span>rodrigolizaldesanchez.net</span>
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.1} className="mb-10">
        <h3 className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-6">
          Experience
        </h3>
        <div className="flex flex-col gap-8">
          {timeline.slice(0, -1).map((entry, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <p className="font-semibold text-[var(--foreground)]">{entry.title}</p>
                <span className="text-xs font-mono text-[var(--muted)] shrink-0 ml-4">{entry.year}</span>
              </div>
              <p className="text-sm text-[var(--accent)]">{entry.org}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">{entry.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.15} className="mb-10 pb-8 border-b border-[var(--border)]">
        <h3 className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-6">
          Education
        </h3>
        {timeline.slice(-1).map((entry, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <p className="font-semibold text-[var(--foreground)]">{entry.title}</p>
              <span className="text-xs font-mono text-[var(--muted)] shrink-0 ml-4">{entry.year}</span>
            </div>
            <p className="text-sm text-[var(--accent)]">{entry.org}</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">{entry.description}</p>
          </div>
        ))}
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.2}>
        <h3 className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-6">
          Skills
        </h3>
        <div className="flex flex-col gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="flex gap-4">
              <span className="text-xs text-[var(--muted)] w-24 shrink-0 pt-0.5">{cat.name}</span>
              <p className="text-sm text-[var(--foreground)]">{cat.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
