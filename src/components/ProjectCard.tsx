"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[#0e0e1a] p-6 hover:border-[var(--accent)]/40 transition-colors duration-300"
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--accent)]/5" />

      <h3 className="font-semibold text-[var(--foreground)]">{project.title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-1">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </Link>
        )}
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Live site"
          >
            <ExternalLink size={16} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
