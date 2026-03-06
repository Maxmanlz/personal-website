"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags))).sort()];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Projects</h1>
        <div className="h-1 w-12 rounded bg-[var(--accent)] mb-6" />
        <p className="text-[var(--muted)] mb-10 max-w-xl">
          Things I&apos;ve built — side projects, open-source contributions, and
          professional work.
        </p>
      </AnimatedSection>

      {/* Tag filter */}
      <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              active === tag
                ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </AnimatedSection>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {filtered.length === 0 && (
            <p className="text-[var(--muted)] text-sm col-span-full">No projects match this filter.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
