"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p variants={item} className="font-mono text-sm text-[var(--accent)] tracking-widest">
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="text-5xl sm:text-7xl font-bold tracking-tight text-[var(--foreground)]">
            Rodrigo Lizalde Sanchez
            <span className="text-[var(--accent)]">.</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl sm:text-2xl text-[var(--muted)] max-w-xl leading-relaxed">
            Full-stack software engineer specialising in TypeScript, Python,
            and AI/LLM integration.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] text-sm font-medium hover:border-[var(--accent)]/50 hover:text-[var(--foreground)] transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-5 pt-2">
            {[
              { icon: Github, href: "https://github.com/maxmanlz", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/rodrigo-lizalde-sanchez", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rlizalde7+website@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon size={20} />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-0.5 h-8 rounded-full bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="pb-24">
          <AnimatedSection className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] flex items-center gap-1 transition-colors"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {featured.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
